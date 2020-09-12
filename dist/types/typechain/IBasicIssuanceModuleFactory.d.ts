import { Signer } from "ethers";
import { Provider } from "ethers/providers";
import { IBasicIssuanceModule } from "./IBasicIssuanceModule";
export declare class IBasicIssuanceModuleFactory {
    static connect(address: string, signerOrProvider: Signer | Provider): IBasicIssuanceModule;
}
