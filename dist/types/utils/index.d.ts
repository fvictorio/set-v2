import { Address } from "./types";
import { SystemFixture } from "./fixtures";
import { Blockchain, ProtocolUtils } from "./common";
export declare const getSystemFixture: (ownerAddress: Address) => SystemFixture;
export declare const getProtocolUtils: () => ProtocolUtils;
export declare const getBlockchainUtils: () => Blockchain;
export { bitcoin, divDown, ether, getPostFeePositionUnits, getStreamingFee, getStreamingFeeInflationAmount, gWei, hashAdapterName, preciseDiv, preciseDivCeil, preciseMul, preciseMulCeil, preciseMulCeilInt, preciseDivCeilInt, reconcileBalances, usdc, } from "./common";
export { getAccounts, getEthBalance, getLastBlockTimestamp, getProvider, getTransactionTimestamp, getWaffleExpect, addSnapshotBeforeRestoreAfterEach, getRandomAccount, getRandomAddress, increaseTimeAsync, mineBlockAsync, } from "./buidler";
