import { Signer } from "ethers";
import { Provider } from "ethers/providers";
import { IOracleAdapter } from "./IOracleAdapter";
export declare class IOracleAdapterFactory {
    static connect(address: string, signerOrProvider: Signer | Provider): IOracleAdapter;
}
