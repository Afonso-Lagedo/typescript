
type Info = {
    id: number;
    name: string;
    description?: string;
}

type Category = {
    category_name: string,
    quantity: number
}


const productInfo: Info ={
    id:123,
    name:"video card",
    //description: ""//optional
}

const categoryOne: Category = {
    category_name: "Hardware",
    quantity: 5
}

//###INTERSECTION###
type TypeTotalInfo = Info & Category;

const newProduct: TypeTotalInfo = {
    id:123,
    name:" game control",
    category_name:"video game",
    quantity: 7
}

console.log(newProduct)