import { ethers } from 'ethers';
import { PROFILE_CREATION_ABI, MOCK_PROFILE_CREATION_PROXY_ADDRESS } from '../const/contracts';
import { getSigner } from './helpers';

export const profileCreationContract = new ethers.Contract(MOCK_PROFILE_CREATION_PROXY_ADDRESS, PROFILE_CREATION_ABI, getSigner());
