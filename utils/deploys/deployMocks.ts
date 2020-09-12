import { Address } from "../types";
import { Signer } from "ethers";
import { BigNumberish, BigNumber } from "ethers/utils";

import {
  AddressArrayUtilsMock,
  ExplicitErc20Mock,
  InvokeMock,
  ManagerIssuanceHookMock,
  ModuleIssuanceHookMock,
  ModuleBaseMock,
  OracleAdapterMock,
  OracleMock,
  PositionMock,
  PreciseUnitMathMock,
  ResourceIdentifierMock,
  StandardTokenMock,
  StandardTokenWithFeeMock,
} from "../contracts";

import { ether } from "../common";

import { AddressArrayUtilsMockFactory } from "../../typechain/AddressArrayUtilsMockFactory";
import { ExplicitErc20MockFactory } from "../../typechain/ExplicitErc20MockFactory";
import { InvokeMockFactory } from "../../typechain/InvokeMockFactory";
import { ManagerIssuanceHookMockFactory } from "../../typechain/ManagerIssuanceHookMockFactory";
import { ModuleBaseMockFactory } from "../../typechain/ModuleBaseMockFactory";
import { ModuleIssuanceHookMockFactory } from "../../typechain/ModuleIssuanceHookMockFactory";
import { OracleAdapterMockFactory } from "../../typechain/OracleAdapterMockFactory";
import { OracleMockFactory } from "../../typechain/OracleMockFactory";
import { PositionMockFactory } from "../../typechain/PositionMockFactory";
import { PreciseUnitMathMockFactory } from "../../typechain/PreciseUnitMathMockFactory";
import { ResourceIdentifierMockFactory } from "../../typechain/ResourceIdentifierMockFactory";
import { StandardTokenMockFactory } from "../../typechain/StandardTokenMockFactory";
import { StandardTokenWithFeeMockFactory } from "../../typechain/StandardTokenWithFeeMockFactory";

export default class DeployMocks {
  private _deployerSigner: Signer;

  constructor(deployerSigner: Signer) {
    this._deployerSigner = deployerSigner;
  }

  public async deployExplicitErc20Mock(): Promise<ExplicitErc20Mock> {
    return await new ExplicitErc20MockFactory(this._deployerSigner).deploy();
  }

  public async deployInvokeMock(): Promise<InvokeMock> {
    return await new InvokeMockFactory(this._deployerSigner).deploy();
  }

  public async deployManagerIssuanceHookMock(): Promise<ManagerIssuanceHookMock> {
    return await new ManagerIssuanceHookMockFactory(this._deployerSigner).deploy();
  }

  public async deployModuleIssuanceHookMock(): Promise<ModuleIssuanceHookMock> {
    return await new ModuleIssuanceHookMockFactory(this._deployerSigner).deploy();
  }

  public async deployAddressArrayUtilsMock(): Promise<AddressArrayUtilsMock> {
    return await new AddressArrayUtilsMockFactory(this._deployerSigner).deploy();
  }

  public async deployModuleBaseMock(controllerAddress: Address): Promise<ModuleBaseMock> {
    return await new ModuleBaseMockFactory(this._deployerSigner).deploy(controllerAddress);
  }

  public async deployOracleMock(initialValue: BigNumberish): Promise<OracleMock> {
    return await new OracleMockFactory(this._deployerSigner).deploy(initialValue);
  }

  public async deployOracleAdapterMock(
    asset: Address,
    dummyPrice: BigNumber
  ): Promise<OracleAdapterMock> {
    return await new OracleAdapterMockFactory(this._deployerSigner).deploy(asset, dummyPrice);
  }

  public async deployPositionMock(): Promise<PositionMock> {
    return await new PositionMockFactory(this._deployerSigner).deploy();
  }

  public async deployPreciseUnitMathMock(): Promise<PreciseUnitMathMock> {
    return await new PreciseUnitMathMockFactory(this._deployerSigner).deploy();
  }

  public async deployResourceIdentifierMock(): Promise<ResourceIdentifierMock> {
    return await new ResourceIdentifierMockFactory(this._deployerSigner).deploy();
  }

  public async deployTokenMock(
    initialAccount: Address,
    initialBalance: BigNumberish = ether(1000000000),
    decimals: BigNumberish = 18,
    name: string = "Token",
    symbol: string = "Symbol"
  ): Promise<StandardTokenMock> {
    return await new StandardTokenMockFactory(this._deployerSigner)
      .deploy(initialAccount, initialBalance, name, symbol, decimals);
  }

  public async deployTokenWithFeeMock(
    initialAccount: Address,
    initialBalance: BigNumberish = ether(1000000000),
    fee: BigNumberish = ether(0.1),
    name: string = "Token",
    symbol: string = "Symbol"
  ): Promise<StandardTokenWithFeeMock> {
    return await new StandardTokenWithFeeMockFactory(this._deployerSigner)
      .deploy(initialAccount, initialBalance, name, symbol, fee);
  }

  /*************************************
   * Instance getters
   ************************************/

  public async getTokenMock(token: Address): Promise<StandardTokenMock> {
    return await new StandardTokenMockFactory(this._deployerSigner).attach(token);
  }
}
