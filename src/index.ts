
interface GameProps{
    readonly id: string;
    name: string;
    description?: string;
    platform: string[];
}

const fifa: GameProps ={
    id: "1",
    name: "fifa",
    platform: ["ps5", "xbox", "pc"]
}

console.log(fifa);

interface DLC extends GameProps {
    origin: GameProps;
    newContents: string[];
}

const fifaDLC: DLC = {
    id:"11",
    name: "Fifa add",
    platform: ["ps5", "xbox", "pc"],
    newContents: ["Libertadores","WordCup"],
    origin: fifa
}

console.log (fifaDLC);