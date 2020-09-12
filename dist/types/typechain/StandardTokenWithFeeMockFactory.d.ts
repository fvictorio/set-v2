import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";
import { TransactionOverrides } from ".";
import { StandardTokenWithFeeMock } from "./StandardTokenWithFeeMock";
export declare class StandardTokenWithFeeMockFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_initialAccount: string, _initialBalance: BigNumberish, _name: string, _symbol: string, _fee: BigNumberish, overrides?: TransactionOverrides): Promise<StandardTokenWithFeeMock>;
    getDeployTransaction(_initialAccount: string, _initialBalance: BigNumberish, _name: string, _symbol: string, _fee: BigNumberish, overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): StandardTokenWithFeeMock;
    connect(signer: Signer): StandardTokenWithFeeMockFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): StandardTokenWithFeeMock;
}
