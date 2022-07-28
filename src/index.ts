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
        if(this.server === newServer){
            throw new Error("new server equals old server");
        }

        this.server=newServer;
    }    
}

const GTA = new Game("192.168.15.10");

console.log(GTA);


try{
    GTA.setServer = "192.168.15.10";
}
catch(error){
    console.log("Error:", error.message);
}


console.log(GTA);

