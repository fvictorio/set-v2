import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";
import { TransactionOverrides } from ".";
import { OracleMock } from "./OracleMock";
export declare class OracleMockFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_startingPrice: BigNumberish, overrides?: TransactionOverrides): Promise<OracleMock>;
    getDeployTransaction(_startingPrice: BigNumberish, overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): OracleMock;
    connect(signer: Signer): OracleMockFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): OracleMock;
}
