import { Signer } from "ethers";
import { Provider } from "ethers/providers";
import { IModule } from "./IModule";
export declare class IModuleFactory {
    static connect(address: string, signerOrProvider: Signer | Provider): IModule;
}
