import { Signer } from "ethers";
import { Provider } from "ethers/providers";
import { ModuleBase } from "./ModuleBase";
export declare class ModuleBaseFactory {
    static connect(address: string, signerOrProvider: Signer | Provider): ModuleBase;
}
