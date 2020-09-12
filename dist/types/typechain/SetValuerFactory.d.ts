import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TransactionOverrides } from ".";
import { SetValuer } from "./SetValuer";
export declare class SetValuerFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_controller: string, overrides?: TransactionOverrides): Promise<SetValuer>;
    getDeployTransaction(_controller: string, overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): SetValuer;
    connect(signer: Signer): SetValuerFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): SetValuer;
}
