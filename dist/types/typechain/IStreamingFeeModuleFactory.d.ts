import { Signer } from "ethers";
import { Provider } from "ethers/providers";
import { IStreamingFeeModule } from "./IStreamingFeeModule";
export declare class IStreamingFeeModuleFactory {
    static connect(address: string, signerOrProvider: Signer | Provider): IStreamingFeeModule;
}
