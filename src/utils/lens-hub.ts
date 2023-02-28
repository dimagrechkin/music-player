import { ethers } from 'ethers';
import { LENS_CONTRACT_ABI, LENS_CONTRACT_ADDRESS } from '../const/contracts';
import { getSigner } from './helpers';

// lens contract info can all be found on the deployed
// contract address on polygon.
export const lensHub = new ethers.Contract(LENS_CONTRACT_ADDRESS, LENS_CONTRACT_ABI, getSigner());
console.log(lensHub, 'lensHub');

// export const lensPeriphery = new ethers.Contract(LENS_PERIPHERY_CONTRACT, LENS_PERIPHERY_ABI, getSigner());
