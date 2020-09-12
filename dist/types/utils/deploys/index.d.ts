import { Signer } from "ethers";
import DeployMocks from "./deployMocks";
import DeployModules from "./deployModules";
import DeployCoreContracts from "./deployCoreContracts";
import DeployExternalContracts from "./deployExternal";
export default class DeployHelper {
    mocks: DeployMocks;
    modules: DeployModules;
    core: DeployCoreContracts;
    external: DeployExternalContracts;
    constructor(deployerSigner: Signer);
}
