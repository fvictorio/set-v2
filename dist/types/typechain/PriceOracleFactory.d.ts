import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { PriceOracle } from "./PriceOracle";
export declare class PriceOracleFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_controller: string, _masterQuoteAsset: string, _adapters: string[], _assetOnes: string[], _assetTwos: string[], _oracles: string[], overrides?: TransactionOverrides): Promise<PriceOracle>;
    getDeployTransaction(_controller: string, _masterQuoteAsset: string, _adapters: string[], _assetOnes: string[], _assetTwos: string[], _oracles: string[], overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): PriceOracle;
    connect(signer: Signer): PriceOracleFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): PriceOracle;
}
