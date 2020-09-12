import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { IntegrationRegistry } from "./IntegrationRegistry";
export declare class IntegrationRegistryFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_controller: string, overrides?: TransactionOverrides): Promise<IntegrationRegistry>;
    getDeployTransaction(_controller: string, overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): IntegrationRegistry;
    connect(signer: Signer): IntegrationRegistryFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): IntegrationRegistry;
}
