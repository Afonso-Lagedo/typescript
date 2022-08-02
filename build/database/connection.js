"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = exports.connection = void 0;
function connection(info) {
    console.log("Successfully Connected", info.ip);
    return true;
}
exports.connection = connection;
function status() {
    console.log("Server: 100%");
}
exports.status = status;
