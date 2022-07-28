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
        this.server = newServer;
    }
}
const GTA = new Game("192.168.15.10");
console.log(GTA);
console.log(GTA.getServe);
GTA.setServer = "192.168.15.15";
console.log(GTA.getServe);
