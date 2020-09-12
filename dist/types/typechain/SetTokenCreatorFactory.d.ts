import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { SetTokenCreator } from "./SetTokenCreator";
export declare class SetTokenCreatorFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_controller: string, overrides?: TransactionOverrides): Promise<SetTokenCreator>;
    getDeployTransaction(_controller: string, overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): SetTokenCreator;
    connect(signer: Signer): SetTokenCreatorFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): SetTokenCreator;
}
