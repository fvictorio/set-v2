import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { Controller } from "./Controller";
export declare class ControllerFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_feeRecipient: string, overrides?: TransactionOverrides): Promise<Controller>;
    getDeployTransaction(_feeRecipient: string, overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): Controller;
    connect(signer: Signer): ControllerFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): Controller;
}
