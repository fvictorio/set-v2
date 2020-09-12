import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { ModuleBaseMock } from "./ModuleBaseMock";
export declare class ModuleBaseMockFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_controller: string, overrides?: TransactionOverrides): Promise<ModuleBaseMock>;
    getDeployTransaction(_controller: string, overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): ModuleBaseMock;
    connect(signer: Signer): ModuleBaseMockFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): ModuleBaseMock;
}
