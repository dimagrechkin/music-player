import { ethers } from 'ethers';
import { LENS_CONTRACT_ABI, LENS_CONTRACT_ADDRESS } from '../const/contracts';
import { ethersProvider, getSigner } from './helpers';
import {AndCondition, OrCondition, FollowCondition, CollectCondition, EncryptedMetadata, EoaOwnership, Erc20TokenOwnership, MetadataV2, NftOwnership, ProfileOwnership, PublicationMainFocus, ContractType, ScalarOperator, LensGatedSDK, LensEnvironment,  } from '@lens-protocol/sdk-gated'


export const sdkClient = await LensGatedSDK.create({
    provider: ethersProvider, // or a jsonrpcsigner
    signer: getSigner(), //from wagmi or a wallet
    env: LensEnvironment.Mumbai,
  });