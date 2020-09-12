import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { PreciseUnitMathMock } from "./PreciseUnitMathMock";
export declare class PreciseUnitMathMockFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: TransactionOverrides): Promise<PreciseUnitMathMock>;
    getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): PreciseUnitMathMock;
    connect(signer: Signer): PreciseUnitMathMockFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): PreciseUnitMathMock;
}
