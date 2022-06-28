const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

function getUniqueProductCount(products){
    var obj = {};
    products.forEach((el)=>{
        if(obj[el.productName] === undefined){
            obj[el.productName] = 1;
        }else{
            obj[el.productName] += 1;
        }
    })
    return obj;
}

console.log(getUniqueProductCount(listOfProducts));