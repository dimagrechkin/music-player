<template>
  <div class="container">
    <div class="form-container">
      <div class="input-container">
        <input
          ref="file"
          type="file"
          @change="handleFileUpload()"
        >
      </div>
      <div class="input-container">
        <input
          v-model="text"
          type="text"
          placeholder="Title"
        >
      </div>
      <div class="input-container">
        <textarea
          v-model="description"
          placeholder="Description"
        />
      </div>
      <div class="input-container">
        <textarea
          v-model="content"
          placeholder="Content"
        />
      </div>
      <div
        class="input-container white center"
        @click="onPost"
      >
        apply
      </div>
      <div
        v-if="validationError"
        class="white"
      >
        please fill every field
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { ethers } from 'ethers';
import {AndCondition, OrCondition, FollowCondition, CollectCondition, EncryptedMetadata, EoaOwnership, Erc20TokenOwnership, MetadataV2, NftOwnership, ProfileOwnership, PublicationMainFocus, ContractType, ScalarOperator, LensGatedSDK, LensEnvironment,  } from '@lens-protocol/sdk-gated'


import {
  useCreatePostTypedDataMutation,
  useAuthenticateMutation,
  useDefaultProfileQuery,
  useChallengeQuery,
} from '@/graphql/generated';
import { useCryptoStore } from '@/stores/crypto';
import { ethersProvider, signedTypeData, getSigner as getSigner2  } from '@/utils/helpers';
import { Metadata } from '@/interfaces/publication';
import { splitSignature } from '@ethersproject/bytes';

import { uploadIpfs } from '../ipfs';
import { lensHub } from '@/utils/lens-hub';

const file = ref<{ files: string }>();
const text = ref('');
const description = ref('');
const content = ref('');
const validationError = ref(false);
const cryptoStore = useCryptoStore();
const { account } = storeToRefs(cryptoStore);

const handleFileUpload = async () => {
  console.log('selected file', file?.value?.files, text.value, description.value); //TODO create image upload feature
};

let signTextSignature = ref<string>();

const { result: challengeResult } = useChallengeQuery(
  () => ({
    request: {
      address: account.value,
    },
  }),
  {
    enabled: !!account.value,
  }
);

const getSigner = () => {
  return new ethers.Wallet(String(import.meta.env.VITE_PK) as string);
};

const signText = (text: string) => {
  return getSigner().signMessage(text);
};

const { mutate: sendSignedMessage } = useAuthenticateMutation();

const { setAccessToken } = useCryptoStore();

const loginAccount = async () => {
  await signText(challengeResult?.value?.challenge.text ?? '');
  signTextSignature.value = await signText(challengeResult?.value?.challenge.text ?? '');

  const { data } = await sendSignedMessage({
    request: {
      address: account.value,
      signature: signTextSignature.value,
    },
  });

  const { accessToken, refreshToken } = data.authenticate;

  setAccessToken(accessToken, refreshToken);
};

const { mutate: requestTypedData } = useCreatePostTypedDataMutation();

const { result } = useDefaultProfileQuery(
  {
    request: {
      ethereumAddress: account.value,
    },
  },
  {
    enabled: !!account.value,
  }
);

// ENCRYPT POST





const onPost = async () => {
  validationError.value = false;
  if (description.value && text.value && content.value) {
    await loginAccount();

    // const ipfsResult = await uploadIpfs<Metadata>({
    //   version: '2.0.0',
    //   mainContentFocus: PublicationMainFocus.TEXT_ONLY,
    //   metadata_id: uuidv4(),
    //   description: description.value,
    //   locale: 'en-US',
    //   content: content.value,
    //   external_url: null,
    //   image: null,
    //   imageMimeType: null,
    //   name: text.value,
    //   attributes: [],
    //   tags: [],
    //   appId: 'lens_protocol_dima',
    // });



    
    let metadata: MetadataV2 = {
      version: '2.0.0',
      name: text.value,
      description: description.value,
      attributes: [],
      content: content.value,
      metadata_id: uuidv4(),
      appId: 'lens_protocol_dima',
      mainContentFocus: PublicationMainFocus.TextOnly,
      locale: 'en',
    }

    // let metadata: MetadataV2 = {
//   version: '2.0.0',
//   name: 'name',
//   description: 'description',
//   attributes: [],
//   content: 'content',
//   metadata_id: '1',
//   appId: 'app_id',
//   mainContentFocus: PublicationMainFocus.TextOnly,
//   locale: 'en',
// }

const uploadMetadataHandler = async (data: EncryptedMetadata): Promise<string> => {
  // Upload the encrypted metadata to your server and return a publicly accessible url
  return uploadIpfs(data);
}

const nftAccessCondition: NftOwnership = {
  contractAddress: '0x43cFEdfD829a4d729164c807a787517a6f53F02B', // the address of the NFT collection, make sure it is a valid address depending on the chosen network
  chainID: 80001, // the chain ID of the network the NFT collection is deployed on;
  contractType: ContractType.Erc721, // the type of the NFT collection, ERC721 and ERC1155 are supported
}

  const sdk = await LensGatedSDK.create({
    provider: ethersProvider,
    signer: getSigner2(),
    env: LensEnvironment.Mumbai,
  });
  
  console.log(sdk, 'sdk');

  // this must be called anytime you change networks, exposed so you can add this to your Web3Provider event handling
  // but not necessary to call explicitly

  // await sdk.connect({
  //   address: '0x1234123412341234123412341234123412341234', // your signer's wallet address
  //   env: LensEnvironment.Mumbai
  // })

  const { contentURI, encryptedMetadata } = await sdk.gated.encryptMetadata(
          metadata,
          result.value?.defaultProfile?.id, // the signed in user's profile id
          {
            nft: nftAccessCondition
          }, // or any other access condition object
          uploadMetadataHandler,
  )
  console.log(contentURI)
  console.log(encryptedMetadata)
  // contentURI is ready to be used in the `contentURI` field of your `createPostTypedMetadata` call
  // also exposing the encrypted metadata in case you want to do something with it
  // ... create post using the Lens API ...


    const typedData = await requestTypedData({
      request: {
        collectModule: {
          freeCollectModule: {
            followerOnly: false,
          },
        },
        contentURI: 'ipfs://' + contentURI?.path,
        profileId: result.value?.defaultProfile?.id,
        referenceModule: {
          followerOnlyReferenceModule: false,
        },
        gated: {
      nft: nftAccessCondition,
      encryptedSymmetricKey:
        encryptedMetadata?.encryptionParams.providerSpecificParams.encryptionKey,
    },
      },
    });

    if (typedData?.data?.createPostTypedData.typedData) {
      const { domain, types, value } = typedData.data.createPostTypedData.typedData;
      const signature = await signedTypeData(domain, types, value);

      const { v, r, s } = splitSignature(signature);

      await lensHub.postWithSig({
        profileId: value.profileId,
        contentURI: value.contentURI,
        collectModule: value.collectModule,
        collectModuleInitData: value.collectModuleInitData,
        referenceModule: value.referenceModule,
        referenceModuleInitData: value.referenceModuleInitData,
        sig: {
          v,
          r,
          s,
          deadline: value.deadline,
        },
      });
    }
  } else {
    validationError.value = true;
  }
};
</script>

<style>
.white {
  color: white;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-container {
  max-width: 800px;
}

.input-container {
  width: 100%;
  padding: 16px;
  margin: 16px;
  border-radius: 16px;
  border: 1px solid white;
}

.center {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
