// These utils will be provider-aware of the buidler interface
import { ethers } from "@nomiclabs/buidler";
import { Address } from "./types";

import { SystemFixture } from "./fixtures";
import { Blockchain, ProtocolUtils } from "./common";

// Buidler-Provider Aware Exports
const provider = ethers.provider;
export const getSystemFixture = (ownerAddress: Address) => new SystemFixture(provider, ownerAddress);
export const getProtocolUtils = () => new ProtocolUtils(provider);
export const getBlockchainUtils = () => new Blockchain(provider);

export {
  bitcoin,
  divDown,
  ether,
  getPostFeePositionUnits,
  getStreamingFee,
  getStreamingFeeInflationAmount,
  gWei,
  hashAdapterName,
  preciseDiv,
  preciseDivCeil,
  preciseMul,
  preciseMulCeil,
  preciseMulCeilInt,
  preciseDivCeilInt,
  reconcileBalances,
  usdc,
} from "./common";
export {
  getAccounts,
  getEthBalance,
  getLastBlockTimestamp,
  getProvider,
  getTransactionTimestamp,
  getWaffleExpect,
  addSnapshotBeforeRestoreAfterEach,
  getRandomAccount,
  getRandomAddress,
  increaseTimeAsync,
  mineBlockAsync,
} from "./buidler";
