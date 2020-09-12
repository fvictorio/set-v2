import { Signer } from "ethers";

import DeployMocks from "./deployMocks";
import DeployModules from "./deployModules";
import DeployCoreContracts from "./deployCoreContracts";
import DeployExternalContracts from "./deployExternal";

export default class DeployHelper {
  public mocks: DeployMocks;
  public modules: DeployModules;
  public core: DeployCoreContracts;
  public external: DeployExternalContracts;

  constructor(deployerSigner: Signer) {
    this.mocks = new DeployMocks(deployerSigner);
    this.modules = new DeployModules(deployerSigner);
    this.core = new DeployCoreContracts(deployerSigner);
    this.external = new DeployExternalContracts(deployerSigner);
  }
}


