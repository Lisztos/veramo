"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.CoreEvents = exports.ValidationError = exports.createAgent = exports.Agent = void 0;
/**
 * Provides {@link @veramo/core#Agent} implementation and defines {@link @veramo/core#IResolver}, {@link @veramo/core#IDIDManager}, {@link @veramo/core#IKeyManager}, {@link @veramo/core#IDataStore}, {@link @veramo/core#IMessageHandler} plugin interfaces
 *
 * @packageDocumentation
 */
var agent_1 = require("./agent");
Object.defineProperty(exports, "Agent", { enumerable: true, get: function () { return agent_1.Agent; } });
Object.defineProperty(exports, "createAgent", { enumerable: true, get: function () { return agent_1.createAgent; } });
var validator_1 = require("./validator");
Object.defineProperty(exports, "ValidationError", { enumerable: true, get: function () { return validator_1.ValidationError; } });
var coreEvents_1 = require("./coreEvents");
Object.defineProperty(exports, "CoreEvents", { enumerable: true, get: function () { return coreEvents_1.CoreEvents; } });
__exportStar(require("./types/IAgent"), exports);
__exportStar(require("./types/IDataStore"), exports);
__exportStar(require("./types/IDataStoreORM"), exports);
__exportStar(require("./types/IIdentifier"), exports);
__exportStar(require("./types/IDIDManager"), exports);
__exportStar(require("./types/IKeyManager"), exports);
__exportStar(require("./types/IMessage"), exports);
__exportStar(require("./types/IMessageHandler"), exports);
__exportStar(require("./types/IResolver"), exports);
__exportStar(require("./types/vc-data-model"), exports);
/**
 * This represents the collection of schemas for the core plugins.
 * Implementations of these schemas can be provided by other packages.
 *
 * @public
 */
const schema = require('../plugin.schema.json');
exports.schema = schema;
//# sourceMappingURL=index.js.map