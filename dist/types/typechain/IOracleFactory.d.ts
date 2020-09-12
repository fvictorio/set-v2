import { Signer } from "ethers";
import { Provider } from "ethers/providers";
import { IOracle } from "./IOracle";
export declare class IOracleFactory {
    static connect(address: string, signerOrProvider: Signer | Provider): IOracle;
}
