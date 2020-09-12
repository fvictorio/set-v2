import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { ResourceIdentifierMock } from "./ResourceIdentifierMock";
export declare class ResourceIdentifierMockFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: TransactionOverrides): Promise<ResourceIdentifierMock>;
    getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): ResourceIdentifierMock;
    connect(signer: Signer): ResourceIdentifierMockFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): ResourceIdentifierMock;
}
