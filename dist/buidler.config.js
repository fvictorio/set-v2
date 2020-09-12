"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var config_1 = require("@nomiclabs/buidler/config");
var task_names_1 = require("@nomiclabs/buidler/builtin-tasks/task-names");
var child_process_1 = require("child_process");
var wallets_1 = require("./utils/wallets");
config_1.usePlugin("@nomiclabs/buidler-waffle");
config_1.usePlugin("buidler-typechain");
config_1.usePlugin("solidity-coverage");
config_1.usePlugin("buidler-deploy");
config_1.internalTask(task_names_1.TASK_COMPILE_RUN_COMPILER).setAction(setupNativeSolc);
var config = {
    solc: {
        version: "0.6.10",
        optimizer: { enabled: true, runs: 200 },
    },
    namedAccounts: {
        deployer: 0,
    },
    networks: {
        buidlerevm: {
            hardfork: "istanbul",
            accounts: getBuidlerPrivateKeys(),
        },
        localhost: {
            url: "http://127.0.0.1:8545",
        },
        kovan: {
            url: "https://kovan.infura.io/v3/" + process.env.INFURA_TOKEN,
            // @ts-ignore
            accounts: ["0x" + process.env.KOVAN_DEPLOY_PRIVATE_KEY],
        },
        // To update coverage network configuration got o .solcover.js and update param in providerOptions field
        coverage: {
            url: "http://127.0.0.1:8555",
        },
    },
    typechain: {
        outDir: "typechain",
        target: "ethers-v4",
    },
};
function getBuidlerPrivateKeys() {
    return wallets_1.privateKeys.map(function (key) {
        var HUNDRED_THOUSAND_ETH = "100000000000000000000000";
        return {
            privateKey: key,
            balance: HUNDRED_THOUSAND_ETH,
        };
    });
}
// @ts-ignore
function setupNativeSolc(_a, _b, runSuper) {
    var input = _a.input;
    var config = _b.config;
    return __awaiter(this, void 0, void 0, function () {
        var solcVersionOutput, output;
        return __generator(this, function (_c) {
            solcVersionOutput = "";
            try {
                solcVersionOutput = child_process_1.execSync("solc --version").toString();
            }
            catch (error) {
                // Probably failed because solc wasn"t installed. We do nothing here.
            }
            console.log("Output", solcVersionOutput);
            if (!solcVersionOutput.includes(config.solc.version)) {
                console.log("Using solcjs");
                return [2 /*return*/, runSuper()];
            }
            console.log("Using native solc");
            output = child_process_1.execSync("solc --standard-json", {
                input: JSON.stringify(input, undefined, 2),
            });
            return [2 /*return*/, JSON.parse(output.toString("utf8"))];
        });
    });
}
exports.default = config;
