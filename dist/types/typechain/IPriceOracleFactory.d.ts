import { Signer } from "ethers";
import { Provider } from "ethers/providers";
import { IPriceOracle } from "./IPriceOracle";
export declare class IPriceOracleFactory {
    static connect(address: string, signerOrProvider: Signer | Provider): IPriceOracle;
}
