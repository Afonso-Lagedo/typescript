"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./database/connection");
const app_1 = __importDefault(require("./database/app"));
function accessSystem() {
    (0, connection_1.connection)({ ip: "192.168.15.10", name: "MySQL" });
}
accessSystem();
(0, connection_1.status)();
(0, app_1.default)();
