import { parseJwt } from '@/lib/auth/helpers';
import { acceptHMRUpdate, defineStore } from 'pinia';

export const useCryptoStore = defineStore('user', {
  state: () => {
    return {
      account: null,
      accessToken: '',
    };
  },
  getters: {
    readAccessToken: (state) =>
      JSON.parse(state.accessToken || '""') as {
        accessToken: string;
        refreshToken: string;
        exp: number;
      },
  },
  actions: {
    async setAccountAddress() {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          alert('Must Conncet to Metamask!');
          return;
        }
        const myAccounts = await ethereum.request({ method: 'eth_requestAccounts' });

        this.account = myAccounts[0];
      } catch (error) {
        console.log(error);
      }
    },
    setAccessToken(accessToken: string, refreshToken: string) {
      const { exp } = parseJwt(accessToken);
      this.accessToken = JSON.stringify({ accessToken, refreshToken, exp });
    },
  },
  persist: {
    enabled: true,
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCryptoStore, import.meta.hot));
}
