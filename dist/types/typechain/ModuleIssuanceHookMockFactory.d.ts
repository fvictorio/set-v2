import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { ModuleIssuanceHookMock } from "./ModuleIssuanceHookMock";
export declare class ModuleIssuanceHookMockFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: TransactionOverrides): Promise<ModuleIssuanceHookMock>;
    getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): ModuleIssuanceHookMock;
    connect(signer: Signer): ModuleIssuanceHookMockFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): ModuleIssuanceHookMock;
}
