import { useCreateFollowTypedDataMutation } from '@/graphql/generated';
import { signedTypeData, splitSignature } from '@/utils/helpers';
import { lensHub } from '../utils/lens-hub';

export function useFollow() {
  const { mutate: requestTypeData } = useCreateFollowTypedDataMutation();

  async function follow(userId: string) {
    const typedData = await requestTypeData({
      request: {
        follow: [
          {
            profile: userId,
          },
        ],
      },
    });
    const { domain, types, value } = typedData?.data?.createFollowTypedData.typedData;

    const signature = await signedTypeData(domain, types, value);

    const { v, r, s } = splitSignature(signature);

    const { ethereum } = window;
    if (!ethereum) {
      alert('Must Connect to Metamask!');
      return;
    }
    const myAccounts = await ethereum.request({ method: 'eth_requestAccounts' });

    const result = await lensHub.followWithSig({
      follower: myAccounts[0],
      profileIds: [userId],
      data: value.datas,
      sig: {
        v,
        r,
        s,
        deadline: value.deadline,
      },
    });
    console.log(result);
  }
}
