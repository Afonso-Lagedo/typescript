//Getters and Setters, for no direct access

class Game{
    private server: string;
    private id: string = "1234"

    constructor(server:string){
        this.server=server;
    }

    //GET: get value 
    get getServe(){
        return this.server;
    }

    //SET: modify value
    set setServer(newServer:string){
        this.server=newServer;
    }    
}

const GTA = new Game("192.168.15.10");

//GTA.id;//It is an error, why is private

console.log(GTA);
console.log(GTA.getServe);

GTA.setServer="192.168.15.15";
console.log(GTA.getServe);
