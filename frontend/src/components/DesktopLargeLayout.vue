<template>
  <div
    v-for="publication in publications"
    :key="publication.id"
    class="desktop-large-layout"
  >
    <div class="overlap-group-1">
      <div class="overlap-group-2">
        <img
          class="rectangle-3"
          :src="defaultProfileImage"
          alt="Rectangle"
        >
      </div>
      <div class="metadata-content nunito-normal-white-15px-2">
        {{ publication.metadata.content }}
      </div>
      <div class="metadata-description nunito-normal-white-15px-2">
        {{ publication.metadata.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import {sdkClient} from '../utils/lens-gated-sdk'
import { PublicationSortCriteria, useExplorePublicationsQuery } from '@/graphql/generated';

interface Props {
  rectangle: string;
  myFavoriteSongs: string;
}
defineProps<Props>();

const { result } = useExplorePublicationsQuery({
  request: {
    sortCriteria: PublicationSortCriteria.Latest,
    sources: 'lens_protocol_dima',
  },
});




const publications = computed(() => result.value?.explorePublications.items);

const gatedPublications = computed(() => result.value?.explorePublications.items.filter((publ)=>publ.isGated).map((item)=> item.metadata));
console.log(gatedPublications, 'publications');

const decrypted  = await sdkClient.gated.decryptMetadata({
    "__typename": "MetadataOutput",
    "name": "dimaEnc",
    "description": "dimaEnc",
    "content": "This publication is gated",
    "media": [],
    "attributes": [],
    "encryptionParams": {
        "__typename": "EncryptionParamsOutput",
        "providerSpecificParams": {
            "__typename": "ProviderSpecificParamsOutput",
            "encryptionKey": "9bff1b30d23ebbc577093a2c03906c829aca0f8fd115618fabaeb0ef451a94035fdbacd204222359550b4fb4c48598117a2bb9620abc40f6f6b889c0d35d30e9fee879701b796bb822283b7d9b03b1302c9010d6c44f4264e05d9b4b6b793cb924b6f3c1b727d617685c49529d20496ae0fd3138bab55b6819b17e54c7788461000000000000002098e09a27cb34b9c235ae216a7500acd7f561afc38486f9d2daab1f8a127ddbf6f18c6da0150a2cec1c5fc3c30145c2a9"
        },
        "accessCondition": {
            "__typename": "AccessConditionOutput",
            "nft": null,
            "eoa": null,
            "token": null,
            "profile": null,
            "follow": null,
            "collect": null,
            "and": null,
            "or": {
                "__typename": "OrConditionOutput",
                "criteria": [
                    {
                        "__typename": "AccessConditionOutput",
                        "and": null,
                        "or": null,
                        "nft": null,
                        "eoa": null,
                        "token": null,
                        "profile": {
                            "__typename": "ProfileOwnershipOutput",
                            "profileId": "0x75f7"
                        },
                        "follow": null,
                        "collect": null
                    },
                    {
                        "__typename": "AccessConditionOutput",
                        "and": null,
                        "or": null,
                        "nft": {
                            "__typename": "NftOwnershipOutput",
                            "contractAddress": "0x43cFEdfD829a4d729164c807a787517a6f53F02B",
                            "chainID": 80001,
                            "contractType": "ERC721",
                            "tokenIds": []
                        },
                        "eoa": null,
                        "token": null,
                        "profile": null,
                        "follow": null,
                        "collect": null
                    }
                ]
            }
        },
        "encryptedFields": {
            "__typename": "EncryptedFieldsOutput",
            "animation_url": null,
            "content": "dtXiVJtVVj6KLIKtSdhuIucPfLKG8CfEHa3SIK_pr9c=",
            "external_url": null,
            "image": null,
            "media": null
        }
    }
})
  // console.log(error) // in case something went wrong or you dont fullfill the criteria
  console.log(decrypted) // otherwise, the decrypted MetadataV2 will be here

// publications.value?.map(async(puplication)=> {
//   const { error, decrypted } = await sdkClient.gated.decryptMetadata(puplication.metadata)
// console.log(error) // in case something went wrong or you dont fullfill the criteria
// console.log(decrypted) // otherwise, the decrypted MetadataV2 will be here
// return puplication;
// })

// const { error, decrypted } = await sdkClient.gated.decryptMetadata(encryptedMetadata)
// console.log(error) // in case something went wrong or you dont fullfill the criteria
// console.log(decrypted) // otherwise, the decrypted MetadataV2 will be here

const defaultProfileImage =
  'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg';
</script>

<style>
.desktop-large-layout {
  align-items: flex-start;
  display: flex;
  height: 177px;
  justify-content: center;
  min-width: 198px;
}

.overlap-group-1 {
  height: 180px;
  margin-top: -1.5px;
  position: relative;
  width: 201px;
}

.overlap-group-2 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-rectangle-5E075E7D-553D-4CCB-BF0C-022EB4C50A17@2x.png);
  background-size: 100% 100%;
  height: 180px;
  left: 0;
  position: absolute;
  top: 0;
  width: 201px;
}

.rectangle-3 {
  border-radius: 10px;
  height: 117px;
  left: 12px;
  object-fit: cover;
  position: absolute;
  top: 12px;
  width: 178px;
}

.play {
  -webkit-backdrop-filter: blur(10px) saturate(100%);
  align-items: flex-start;
  backdrop-filter: blur(10px) saturate(100%);
  background-color: var(--black-2);
  border: 1px solid;
  border-color: var(--black);
  border-radius: 32px;
  display: flex;
  height: 32px;
  justify-content: flex-end;
  left: 142px;
  min-width: 32px;
  padding: 9px 11px;
  position: absolute;
  top: 110px;
}

.arrow-right-fill {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64149f18b07195ba5e7e1f9f/releases/641842c9202b1f222d9ddf3f/img/medium-copy-2-arrow-right-fill-9B53BBEC-5400-4B90-BA88-2EA21E9BA4B8@2x.png);
  background-size: 100% 100%;
  height: 12px;
  width: 9px;
}

.metadata-content {
  left: 12px;
  letter-spacing: 0;
  line-height: 18px;
  position: absolute;
  top: 144px;
  white-space: nowrap;
}

.metadata-description {
  right: 22px;
  letter-spacing: 0;
  line-height: 18px;
  position: absolute;
  top: 144px;
  white-space: nowrap;
}
</style>
