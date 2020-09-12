import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";
import { TransactionOverrides } from ".";
import { StandardTokenMock } from "./StandardTokenMock";
export declare class StandardTokenMockFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_initialAccount: string, _initialBalance: BigNumberish, _name: string, _symbol: string, _decimals: BigNumberish, overrides?: TransactionOverrides): Promise<StandardTokenMock>;
    getDeployTransaction(_initialAccount: string, _initialBalance: BigNumberish, _name: string, _symbol: string, _decimals: BigNumberish, overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): StandardTokenMock;
    connect(signer: Signer): StandardTokenMockFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): StandardTokenMock;
}
