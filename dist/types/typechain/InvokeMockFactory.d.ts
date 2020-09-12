import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { InvokeMock } from "./InvokeMock";
export declare class InvokeMockFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: TransactionOverrides): Promise<InvokeMock>;
    getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): InvokeMock;
    connect(signer: Signer): InvokeMockFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): InvokeMock;
}
