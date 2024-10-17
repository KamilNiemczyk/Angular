"use strict";
var getProductSummary = function (product) {
    if ("fileSizeMB" in product) {
        console.log("ID: ".concat(product.id, ", Name: ").concat(product.name, ", Price: ").concat(product.price, ", File size: ").concat(product.fileSizeMB, "MB, Download link: ").concat(product.downloadLink));
    }
    else {
        console.log("ID: ".concat(product.id, ", Name: ").concat(product.name, ", Price: ").concat(product.price, ", Weight: ").concat(product.weightKg, "kg, Dimensions: ").concat(product.dimensions.width, "x").concat(product.dimensions.height));
    }
};
var digProd = {
    id: 1,
    name: "DigProd",
    price: 1,
    fileSizeMB: 1,
    downloadLink: "a.com"
};
var phyProd = {
    id: 2,
    name: "PhyProd",
    price: 2,
    weightKg: 2,
    dimensions: {
        width: 2,
        height: 2
    }
};
getProductSummary(digProd);
getProductSummary(phyProd);
