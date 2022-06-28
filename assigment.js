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


function getUniquePrducts(products){
  var obj1 = {};
  var arr = [];
  var obj2 = {};
  products.map((el)=>{
    if(obj1[el.productName] === undefined){
      obj1[el.productName] = el.quantity;
      
    }
    else{
      obj1[el.productName] += el.quantity;
    }
  })
  
  products.map((el)=>{
    if(obj2[el.productName] === undefined){
      obj2[el.productName] = 1;
      el.quantity = obj1[el.productName];
      arr.push(el);
    }
  })

  return arr;

}
// console.log(getUniqueProductCount(listOfProducts));
// console.log((getUniquePrducts(listOfProducts)));