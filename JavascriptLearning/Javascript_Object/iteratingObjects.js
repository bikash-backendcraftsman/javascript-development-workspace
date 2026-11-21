const jeans = {
    brandId: "009JS",
    manufacturer: "LS Ventures",
    stockType: true,
    distributionMarketSegment: "South"
};

//Iterating through objects#

for(let product in jeans){
    console.log(`${product}: ${jeans[product]}`);
}

