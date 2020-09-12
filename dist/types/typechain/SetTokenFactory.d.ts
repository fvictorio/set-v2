import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";
import { TransactionOverrides } from ".";
import { SetToken } from "./SetToken";
export declare class SetTokenFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_components: string[], _units: BigNumberish[], _modules: string[], _controller: string, _manager: string, _name: string, _symbol: string, overrides?: TransactionOverrides): Promise<SetToken>;
    getDeployTransaction(_components: string[], _units: BigNumberish[], _modules: string[], _controller: string, _manager: string, _name: string, _symbol: string, overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): SetToken;
    connect(signer: Signer): SetTokenFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): SetToken;
}
