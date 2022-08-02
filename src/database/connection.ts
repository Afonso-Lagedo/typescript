

type Connection = {
    ip: string;
    name:string;
}

export function connection(info: Connection):boolean{
    console.log("Successfully Connected", info.ip);
    return true;
}

export function status():void{
    console.log("Server: 100%")
}