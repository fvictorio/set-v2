import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { ExplicitErc20Mock } from "./ExplicitErc20Mock";
export declare class ExplicitErc20MockFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: TransactionOverrides): Promise<ExplicitErc20Mock>;
    getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): ExplicitErc20Mock;
    connect(signer: Signer): ExplicitErc20MockFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): ExplicitErc20Mock;
}
