"use strict";
class Game {
    constructor(server) {
        this.id = "1234";
        this.server = server;
    }
    get getServe() {
        return this.server;
    }
    set setServer(newServer) {
        if (this.server === newServer) {
            throw new Error("new server equals old server");
        }
        this.server = newServer;
    }
}
const GTA = new Game("192.168.15.10");
console.log(GTA);
try {
    GTA.setServer = "192.168.15.10";
}
catch (error) {
    console.log("Error:", error.message);
}
console.log(GTA);
