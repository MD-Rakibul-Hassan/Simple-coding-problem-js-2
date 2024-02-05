/********Simple coding problems solving *********/
// Problem 1 : Find Max value in an array 
const number = [10,20,70,30,40,50,90];
function findMaxValue (num) {
      const max = Math.max(...num);
      return max;
}
let maxValue = findMaxValue(number);
console.log(maxValue)
function findMaxValueAnotherWay (num) {
      let initalMax = num[0];
      for (value of num) {
            if (initalMax > value) {
                  initalMax = value;
            }
      }
      return initalMax;
}
const max = findMaxValueAnotherWay(number);
console.log(max);
// Problem 2 : Find lowast mobile price into an object 
const mobiles = [
      {name : "Samsung",price : 20000 , color : "Red"},
      {name : "Redmi",price : 18000 , color : "Red"},
      {name : "Vivo",price : 21000 , color : "Red"},
      {name : "Sympony",price : 12000 , color : "Red"},
      {name : "Oppo",price : 30000 , color : "Red"},
]
function findMaxMobilePrice (mobile) {
      let initalMaxPrice = mobile[0].price;
      for (value of mobile) {
            if (value.price > initalMaxPrice) {
                  initalMaxPrice = value.price;

            }
      }
      console.log(initalMaxPrice)
}
findMaxMobilePrice(mobiles);
// Problem 3 : Make basic calculator through a condition 
function add (n1,n2) {
      let result = n1 + n2;
      return result;
}
function sub (n1,n2) {
      let result = n1 - n2;
      return result;
}
function milt (n1,n2) {
      let result = n1 * n2;
      return result;
}
function div (n1,n2) {
      let result = n1 / n2;
      return result;
}
function calculator (a,b,condition) {
      if(condition === 1){
          return  add (a,b)
      }
      else if (condition === 2) {
          return  sub(a,b)
      }
      else if (condition === 3) {
          return  milt (a,b)
      }
      else if (condition === 4) {
          return  div(a,b)
      }
};
console.log(calculator(10,2,4))