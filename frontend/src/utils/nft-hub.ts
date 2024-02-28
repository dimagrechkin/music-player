import { ethers } from 'ethers';
import { NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI } from '../const/contracts';
import { getSigner, signer } from './helpers';

export const nftHub = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, signer);
