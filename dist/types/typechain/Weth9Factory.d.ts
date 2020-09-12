import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { Weth9 } from "./Weth9";
export declare class Weth9Factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: TransactionOverrides): Promise<Weth9>;
    getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): Weth9;
    connect(signer: Signer): Weth9Factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Weth9;
}
