import { isProductionChainId,
  isTestnet2ChainId } from './common/connectors/index.ts';

export const config = (chainId) => {
  const conf = isProductionChainId(chainId)
    ? {
      contractAddress:
          '0x05b991e122ff2410d32575eb369059bd26cb69a05d15001a0c93f2678d96d81c',
      profilePageAPI: 'https://api.starkscan.co/api/v0/nfts',
      questPageJSONLink: 'https://static.jediswap.xyz/missions-list/',
    }
    : isTestnet2ChainId(chainId)
      ? {
        contractAddress:
          '0x077126e027feb93fafa4a07147747ba8ce41e28f17bb25a8c281311f91b8b994',
        profilePageAPI: 'https://api-testnet-2.starkscan.co/api/v0/nfts',
        questPageJSONLink: 'https://static.staging.jediswap.xyz/missions-list/',
      }
      : {
        contractAddress:
          '0x077126e027feb93fafa4a07147747ba8ce41e28f17bb25a8c281311f91b8b994',
        profilePageAPI: 'https://api-testnet.starkscan.co/api/v0/nfts',
        questPageJSONLink: 'https://static.staging.jediswap.xyz/missions-list/',
      };
  return conf;
};
