import { Get, Injectable, Query } from '@nestjs/common';
import { GetUriResponseDto, PostRequestDto, ResponseDto } from './utils/types';
import { POLYGON_URL } from './utils/urls';
import { JsonRpcProvider } from '@ethersproject/providers';
import { CollectNFT__factory, LensHub__factory } from '../typechain-types';
import { PostDataStruct } from '../typechain-types/LensHub';
import { defaultAbiCoder } from 'ethers/lib/utils';
import { BigNumber } from 'ethers';
import { getAddrs, ZERO_ADDRESS } from './utils/address';

@Injectable()
export class AppService {
  async post(request: PostRequestDto): Promise<ResponseDto> {
    const {url} = request;
    const provider = new JsonRpcProvider(POLYGON_URL);
    const accounts = await provider.listAccounts();
    console.log(accounts);
    const governance = accounts[1];
    const treasury = accounts[2];
    const user = accounts[3];
    const addrs = getAddrs();
    const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], provider.getSigner(governance));
    const currency = addrs['currency'];

    const recipientAddress = addrs['recipient'];
    const multirecipientCollectModuleAddr = addrs['multireciepient collect module'];
    
    const inputStruct: PostDataStruct = {
      profileId: 1,
      contentURI: url,
      collectModule: multirecipientCollectModuleAddr,
      collectModuleInitData: defaultAbiCoder.encode([
          'tuple(uint256,uint96,address,uint16,bool,uint72,tuple(address, uint16)[])'], 
          [[BigNumber.from('1000000000000000000'), 0, currency, 0, false, 0, [[treasury, 8000], [recipientAddress, 2000]]]]),
      referenceModule: ZERO_ADDRESS,
      referenceModuleInitData: [],
    };
    const gas = await lensHub.connect(user).estimateGas.post(inputStruct);
    const tx = await lensHub.connect(user).populateTransaction.post(inputStruct);
    console.log(gas);
    return {...tx, value: tx.value?.toHexString(), from: user, gas: gas.toString()};
  }

  async collect(): Promise<ResponseDto> {
    const provider = new JsonRpcProvider(POLYGON_URL);
    const accounts = await provider.listAccounts();
    const ONE_CURRENCY = BigNumber.from('1000000000000000000');
    console.log(accounts);
    const governance = accounts[1];
    const treasury = accounts[2];
    const user = accounts[3];
    const addrs = getAddrs();
    const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], provider.getSigner(user));
    const currency = addrs['currency'];

    
    const gas = await lensHub.connect(user).estimateGas.collect(1, 1, defaultAbiCoder.encode([
      'address','uint256'],
      [currency, ONE_CURRENCY]));
    const tx = await lensHub.connect(user).populateTransaction.collect(1, 1, defaultAbiCoder.encode([
      'address','uint256'],
      [currency, ONE_CURRENCY]));
    console.log(tx);
    return {...tx, value: tx.value?.toHexString(), from: user, gas: gas.toString()}; 
  }

  async getImage(): Promise<GetUriResponseDto> {
    const provider = new JsonRpcProvider(POLYGON_URL);
    const accounts = await provider.listAccounts();
    console.log(accounts);
    const governance = accounts[1];
    const treasury = accounts[2];
    const user = accounts[3];
    const addrs = getAddrs();
    const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], provider.getSigner(governance));
    const currency = addrs['currency'];
    
    const uri = (await lensHub.getPub(1, 1)).contentURI;
    return {uri: uri};
  }

  async getNft(): Promise<GetUriResponseDto> {
    const provider = new JsonRpcProvider(POLYGON_URL);
    const accounts = await provider.listAccounts();
    const ONE_CURRENCY = BigNumber.from('1000000000000000000');
    console.log(accounts);
    const governance = accounts[1];
    const treasury = accounts[2];
    const user = accounts[3];
    const addrs = getAddrs();
    const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], provider.getSigner(user));
    const currency = addrs['currency'];
    
    const collectNFTAddr = await lensHub.getCollectNFT(1, 1);
    const collectNFT = CollectNFT__factory.connect(collectNFTAddr, provider.getSigner(user));
    const uri = await collectNFT.tokenURI(1);
    return {uri};
  }
}

