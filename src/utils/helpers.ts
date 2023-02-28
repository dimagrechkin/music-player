import omitDeep from 'omit-deep';
import { TypedDataDomain } from '@ethersproject/abstract-signer';
import { ethers, Wallet } from 'ethers';

export const ethersProvider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/');

const privateKey = '0x4f06b87ea72ed5bcd24812bdb0c54397cd4b66aab8f62975408e6d526bf7461c'; //TODO move key to env

export const getSigner = () => {
  return new Wallet(privateKey, ethersProvider);
};

export const imgConverter = (url: string) => {
  url.replace('ipfs://', 'https://ipfs.io/ipfs/');
  return url;
};

export function omitTypename(object: any) {
  return omitDeep(object, ['__typename']);
}
const signer = getSigner();

export const signedTypeData = (domain: TypedDataDomain, types: Record<string, any>, value: Record<string, any>) => {
  // remove the __typedname from the signature!

  return signer._signTypedData(omitTypename(domain), omitTypename(types) as Record<string, any>, omitTypename(value));
};

export const splitSignature = (signature: string) => {
  return ethers.utils.splitSignature(signature);
};
