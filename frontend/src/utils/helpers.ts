import omitDeep from 'omit-deep';
import { TypedDataDomain } from '@ethersproject/abstract-signer';
import { ethers } from 'ethers';

export const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);

export const getSigner = () => {
  return ethersProvider.getSigner()
};

export const imgConverter = (url: string) => {
  url.replace('ipfs://', 'https://ipfs.io/ipfs/');
  return url;
};

export function omitTypename(object: any) {
  return omitDeep(object, ['__typename']);
}

export const signer = getSigner();

export const signedTypeData = (domain: TypedDataDomain, types: Record<string, any>, value: Record<string, any>) => {
  // remove the __typedname from the signature!

  return signer._signTypedData(omitTypename(domain), omitTypename(types) as Record<string, any>, omitTypename(value));
};

export const splitSignature = (signature: string) => {
  return ethers.utils.splitSignature(signature);
};
