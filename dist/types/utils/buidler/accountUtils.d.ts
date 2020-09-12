import { BigNumber } from "ethers/utils";
import { Account, Address, Wallet } from "../types";
export declare const getAccounts: () => Promise<Account[]>;
export declare const getRandomAccount: () => Promise<Account>;
export declare const getRandomAddress: () => Promise<Address>;
export declare const getEthBalance: (account: Address) => Promise<BigNumber>;
export declare const getWallets: () => Promise<Wallet[]>;
