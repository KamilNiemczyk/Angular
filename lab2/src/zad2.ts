interface Product {
    id : number;
    name : string;
    price : number;
}

interface DigitalProduct extends Product {
    fileSizeMB : number;
    downloadLink : string;
}

interface PhysicalProduct extends Product {
    weightKg : number;
    dimensions : {
        width : number;
        height : number;
    };
}

const getProductSummary =(product : DigitalProduct | PhysicalProduct) =>{
    if ("fileSizeMB" in product){
        console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, File size: ${product.fileSizeMB}MB, Download link: ${product.downloadLink}`);
    }else{
        console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Weight: ${product.weightKg}kg, Dimensions: ${product.dimensions.width}x${product.dimensions.height}`);
    }
}

const digProd = {
    id: 1,
    name: "DigProd",
    price: 1,
    fileSizeMB: 1,
    downloadLink: "a.com"
}
const phyProd = {
    id: 2,
    name: "PhyProd",
    price : 2,
    weightKg : 2,
    dimensions : {
        width : 2,
        height :2
    }
}
getProductSummary(digProd);
getProductSummary(phyProd)
