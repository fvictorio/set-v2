import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { BasicIssuanceModule } from "./BasicIssuanceModule";
export declare class BasicIssuanceModuleFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_controller: string, overrides?: TransactionOverrides): Promise<BasicIssuanceModule>;
    getDeployTransaction(_controller: string, overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): BasicIssuanceModule;
    connect(signer: Signer): BasicIssuanceModuleFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): BasicIssuanceModule;
}
