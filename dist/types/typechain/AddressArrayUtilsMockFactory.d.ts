import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { AddressArrayUtilsMock } from "./AddressArrayUtilsMock";
export declare class AddressArrayUtilsMockFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: TransactionOverrides): Promise<AddressArrayUtilsMock>;
    getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): AddressArrayUtilsMock;
    connect(signer: Signer): AddressArrayUtilsMockFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): AddressArrayUtilsMock;
}
