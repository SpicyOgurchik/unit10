let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

//prints 8
console.log(numPlanets); 
//prints 1846
console.log(yearNeptuneDiscovered); 

let planetFacts = {
    numPlanets1: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};
  
let {numPlanets1, ...discoveryYears} = planetFacts;
// prints: {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
console.log(discoveryYears);


function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

// prints: Your name is Alejandro and you like purple
getUserData({firstName: "Alejandro", favoriteColor: "purple"})

// prints: Your name is Melissa and you like green
getUserData({firstName: "Melissa"})

// prints: Your name is undefined and you like green  
getUserData({})

let [first, second, third] = ["Maya", "Marisa", "Chi"];
// prints Maya
console.log(first);
// prints Marisa
console.log(second);
// prints Chi
console.log(third);


let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]
  
// prints "Raindrops on roses"
console.log(raindrops);
//prints "whiskers on kittens"
console.log(whiskers);
// prints ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]
console.log(aFewOfMyFavoriteThings);
  

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

// prints [10,30,20]
console.log(numbers);


// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
};
  
const {a,b} = obj.numbers;

// swap
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]];