import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { PositionMock } from "./PositionMock";
export declare class PositionMockFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: TransactionOverrides): Promise<PositionMock>;
    getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): PositionMock;
    connect(signer: Signer): PositionMockFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): PositionMock;
}
