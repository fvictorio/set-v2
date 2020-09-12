import { Signer } from "ethers";
import { BigNumberish } from "ethers/utils";
import { ether } from "../common";

import {
  Weth9
} from "./../contracts";

import { Weth9Factory } from "../../typechain/Weth9Factory";

import { Address } from "./../types";

export default class DeployExternalContracts {
  private _deployerSigner: Signer;

  constructor(deployerSigner: Signer) {
    this._deployerSigner = deployerSigner;
  }

  public async deployWETH(): Promise<Weth9> {
    return await new Weth9Factory(this._deployerSigner).deploy();
  }
}
