/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Recipient, RecipientInterface } from "../Recipient";

const _abi = [
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060f98061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806312065fe014602d575b600080fd5b60336045565b60405190815260200160405180910390f35b6000306001600160a01b03166312065fe06040518163ffffffff1660e01b8152600401602060405180830381865afa1580156084573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019060a6919060ab565b905090565b60006020828403121560bc57600080fd5b505191905056fea2646970667358221220d41f33d1171bc58bcc3ce589aae08f69e754e70e716bf58853512db73a67b79e64736f6c634300080a0033";

type RecipientConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RecipientConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Recipient__factory extends ContractFactory {
  constructor(...args: RecipientConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Recipient> {
    return super.deploy(overrides || {}) as Promise<Recipient>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Recipient {
    return super.attach(address) as Recipient;
  }
  connect(signer: Signer): Recipient__factory {
    return super.connect(signer) as Recipient__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RecipientInterface {
    return new utils.Interface(_abi) as RecipientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Recipient {
    return new Contract(address, _abi, signerOrProvider) as Recipient;
  }
}
