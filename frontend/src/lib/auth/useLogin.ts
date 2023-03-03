import { ethers } from 'ethers';
import { storeToRefs } from 'pinia';
import { useMutation } from '@tanstack/vue-query';
import { useCryptoStore } from '@/stores/crypto';
import { useChallengeQuery, useAuthenticateMutation } from '@/graphql/generated';

export default async function useLogin() {
  const cryptoStore = useCryptoStore();
  const { account } = storeToRefs(cryptoStore);
  const { ethereum } = window;
  const myAccounts = await ethereum.request({ method: 'eth_requestAccounts' });

  account.value = myAccounts[0];

  const { result } = useChallengeQuery({
    request: {
      address: account,
    },
  });

  const { mutate: sendSignedMessage } = useAuthenticateMutation();

  if (!account && !result.value?.challenge.text) {
    return;
  }

  async function login() {
    const privateKey = '0x0123456789012345678901234567890123456789012345678901234567890123'; //TODO move key to env

    const wallet = new ethers.Wallet(privateKey);
    const signature = await wallet.signMessage(result?.value?.challenge.text);

    const { authenticate } = await sendSignedMessage({
      request: {
        address: account,
        signature: signature,
      },
    });
  }

  return useMutation(login);
}
