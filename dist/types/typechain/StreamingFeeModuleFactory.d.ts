import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { StreamingFeeModule } from "./StreamingFeeModule";
export declare class StreamingFeeModuleFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_controller: string, overrides?: TransactionOverrides): Promise<StreamingFeeModule>;
    getDeployTransaction(_controller: string, overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): StreamingFeeModule;
    connect(signer: Signer): StreamingFeeModuleFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): StreamingFeeModule;
}
