"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashAdapterName = exports.bigNumberToData = exports.addressToData = void 0;
var utils_1 = require("ethers/utils");
exports.addressToData = function (address) { return address.replace("0x", "000000000000000000000000"); };
exports.bigNumberToData = function (number) { return number.toHexString().replace("0x", "").padStart(64, "0"); };
exports.hashAdapterName = function (name) { return utils_1.keccak256(new Buffer(name)); };
