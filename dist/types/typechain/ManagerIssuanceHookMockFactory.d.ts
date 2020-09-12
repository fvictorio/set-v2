import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { ManagerIssuanceHookMock } from "./ManagerIssuanceHookMock";
export declare class ManagerIssuanceHookMockFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: TransactionOverrides): Promise<ManagerIssuanceHookMock>;
    getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): ManagerIssuanceHookMock;
    connect(signer: Signer): ManagerIssuanceHookMockFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): ManagerIssuanceHookMock;
}
