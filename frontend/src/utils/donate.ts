import { ethers } from 'ethers';
import { LENS_CONTRACT_ABI, DONATIONS_CONTRACT_ADDRESS } from '../const/contracts';
import { getSigner } from './helpers';

export const donateContract = new ethers.Contract(DONATIONS_CONTRACT_ADDRESS, LENS_CONTRACT_ABI, getSigner());
