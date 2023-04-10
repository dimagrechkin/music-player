import { create } from 'ipfs-http-client';

const projectId = '2MN5DlHtVmXqRIPpoVi7cdvIWDt';
const secret = '7b90575f75efe325a3810666c461efca';

if (!projectId || !secret) {
  throw new Error('Must define INFURA_PROJECT_ID and INFURA_SECRET in the .env to run this');
}

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: `Basic ${Buffer.from(`${projectId}:${secret}`, 'utf-8').toString('base64')}`,
  },
});

export const uploadIpfs = async <T>(data: T) => {
  const result = await client.add(JSON.stringify(data));

  return result;
};

export const uploadIpfsGetPath = async <T>(data: T) => {
  const result = await client.add(JSON.stringify(data));

  return result.path;
};
