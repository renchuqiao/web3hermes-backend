/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface RecipientInterface extends utils.Interface {
  functions: {
    "getBalance()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getBalance",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;

  events: {};
}

export interface Recipient extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RecipientInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getBalance(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getBalance(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getBalance(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getBalance(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
