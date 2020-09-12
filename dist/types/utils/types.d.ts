import { BigNumber } from "ethers/utils";
import { ContractTransaction as ContractTransactionType, Wallet as WalletType } from "ethers";
export declare type Account = {
    address: Address;
    wallet: Wallet;
};
export declare type Address = string;
export declare type Bytes = string;
export declare type Position = {
    component: Address;
    module: Address;
    unit: BigNumber;
    positionState: number;
    data: string;
};
export declare type ContractTransaction = ContractTransactionType;
export declare type Wallet = WalletType;
export interface StreamingFeeState {
    feeRecipient: Address;
    streamingFeePercentage: BigNumber;
    maxStreamingFeePercentage: BigNumber;
    lastStreamingFeeTimestamp: BigNumber;
}
