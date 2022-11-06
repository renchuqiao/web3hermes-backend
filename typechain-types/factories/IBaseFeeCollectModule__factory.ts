/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBaseFeeCollectModule,
  IBaseFeeCollectModuleInterface,
} from "../IBaseFeeCollectModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "calculateFee",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
    ],
    name: "getBasePublicationData",
    outputs: [
      {
        components: [
          {
            internalType: "uint160",
            name: "amount",
            type: "uint160",
          },
          {
            internalType: "uint96",
            name: "collectLimit",
            type: "uint96",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "currentCollects",
            type: "uint96",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "referralFee",
            type: "uint16",
          },
          {
            internalType: "bool",
            name: "followerOnly",
            type: "bool",
          },
          {
            internalType: "uint72",
            name: "endTimestamp",
            type: "uint72",
          },
        ],
        internalType: "struct BaseProfilePublicationData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "initializePublicationCollectModule",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "referrerProfileId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "collector",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "processCollect",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBaseFeeCollectModule__factory {
  static readonly abi = _abi;
  static createInterface(): IBaseFeeCollectModuleInterface {
    return new utils.Interface(_abi) as IBaseFeeCollectModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBaseFeeCollectModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IBaseFeeCollectModule;
  }
}