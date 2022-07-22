/*
POO encapsulation-PROTECTED
*/

class User{
    protected id:number;
    name: string;
    email:string;

    constructor(id:number, name:string, email:string){
        this.id =  id;
        this.name = name;
        this.email = email;
    }
}

class Admin extends User{ //heritage of User
    
    position: string;
    level: number;

    constructor(id:number, name:string, email:string, position:string, level:number){
        
        super(id, name, email);

        this.position = position;
        this.level = level;
    }

    modifyPosition(){
        console.log("Position Modified");
        console.log("User ID:", this.id); //I can modify, why this class is son 
    }
    
    protected modifyLevel(){
        console.log("User Level"); 
    }

    acessTest(){
        this.modifyLevel();
    }
}

const user1 = new Admin(1,"Afonso", "afonso.ur@gmail.com", "DEV", 2);

console.log(user1);

user1.modifyPosition();

user1.acessTest();

//user1.modifyLevel();//it is protected

//user1.id; //it is an error >>> Can't acess why is protected
