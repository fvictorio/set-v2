import { Signer } from "ethers";
import { Provider } from "ethers/providers";
import { IIntegrationRegistry } from "./IIntegrationRegistry";
export declare class IIntegrationRegistryFactory {
    static connect(address: string, signerOrProvider: Signer | Provider): IIntegrationRegistry;
}
