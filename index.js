/*
1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
1.2 Crea una variable llamada x, asigna el valor 50 a ella.
1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.

*/

function kata_1() {
  let myFavoriteHero;
  let x = 50;
  let h = 5;
  let y = 10;
  let z = h + y;
  return `${myFavoriteHero} has ${x} years old, and have an son of ${z}`;
}

/*
1.1 Dado el siguiente objeto, cambia el valor de la propiedad age a 25.
*/
const character = { name: "Jack Sparrow", age: 10 };
function kata_2a() {
  character.age = 50;
  console.log(character.age);
}
/*
1.2 Declara 3 variables con los nombres y valores siguientes 
firstName = 'Jon'; 
lastName = 'Snow'; 
age = 24; 
Muestralos por consola de esta forma: 
'Soy Jon Snow, tengo 24 años y me gustan los lobos.'
*/

function kata_2b() {
  let firstName = "Jon";
  let lastName = "Snow";
  let age = 24;
  console.log(
    `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`
  );
}
/*
1.3 Dado el siguiente código, imprime con un console.log la suma del precio de
ambos juguetes.
*/
const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };
function kata_2c() {
  console.log(toy1.price + toy2.price);
}
/*
1.4 Dado el siguiente código, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.
*/
let globalBasePrice = 10000;
const car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 };
const car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 };
function kata_2d() {
  globalBasePrice = 25000;
  car1.finalPrice = globalBasePrice + car1.basePrice;
  car2.finalPrice = globalBasePrice + car2.basePrice;
}

/*
1.1 Multiplica 10 por 5 y muestra el resultado mediante console.

1.2 Divide 10 por 2 y muestra el resultado en un console.

1.3 Muestra mediante un console el resto de dividir 15 por 9.

1.4 Usa el correcto operador de asignación que resultará en o = 15, 
teniendo dos variables p = 10 y j = 5.

1.5 Usa el correcto operador de asignación que resultará en i = 50,
teniendo dos variables c = 10 y m = 5.
*/
function kata_3a() {
  console.log(10 * 5);
  console.log(10 / 2);
  console.log(15 % 9);
  let p = 10,
    j = 5;
  let o = p + j;
  let c = 10,
    m = 5;
  let i = c * m;
}

/*
1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
*/
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
/*
1.2 Cambia el primer elemento de avengers a "IRONMAN"
*/
const avengers3 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
/*
1.3 console numero de elementos en el array usando la propiedad correcta de Array.
*/
const avengers4 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
/*

1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array
*/
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
/*

1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
*/
const rickAndMortyCharacters2 = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];
/*
1.6 Elimina el segundo elemento del array y muestra el array por consola.
*/
const rickAndMortyCharacters3 = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

function kata_4() {
  // 1
  console.log(avengers2[0]);
  // 2
  avengers3[0] = "IRONMAN";
  // 3
  console.log(avengers4.length);
  // 4
  rickAndMortyCharacters.push("Morty", "Summer");
  console.log(rickAndMortyCharacters.at(-1));
  console.log(rickAndMortyCharacters.pop());
  // 5
  rickAndMortyCharacters2.pop();
  console.log(rickAndMortyCharacters2[0], rickAndMortyCharacters2.pop());
  // 6
  rickAndMortyCharacters3.splice(1, 1);
  console.log(rickAndMortyCharacters3);
}

// kata 5
const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if (number1 === 10) {
  console.log("number1 es estrictamente igual a 10");
}

if (number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 === number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log(
    "number3 por 5 es igual a number1 Y number1 por 2 es igual a number2"
  );
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log(
    "number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3"
  );
}

// kata 6

/*
1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.

1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'.
*/
function kata_6() {
  // 1
  for (let i = 0; i <= 9; i++) console.log(i);

  // 2
  for (let i = 0; i <= 9; i++) i % 2 === 0 && console.log(i);

  // 3
  for (let i = 0; i < 10; i++)
    i < 9 ? console.log("Intentando dormir 🐑") : console.log("Dormido!");
}

// kata 7

// Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne, numberTwo) {
  return Math.max([numberOne, numberTwo]);
}

// kata 8

/*
Buscar la palabra más larga Completa la función que tomando un array de strings como 
argumento devuelva el más largo, en caso de que dos strings tengan la misma longitud 
deberá devolver el primero.
*/

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(param = avengers) {
  let maxLength = Math.max(param.map(x => x.length));
  return param.find(a => a.length === maxLength);
}


// kata 9

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param = numbers) {
  return param.reduce((p, c) => p + c);
}


// kata 10

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(param = numbers2) {
  return param.reduce((p, c) => p + c) / param.length;
}


// kata 11

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
function averageWord(param = mixedElements) {
  return param.reduce((p, c) => p + (typeof c === 'string' ? c.length : c), 0);
}


// kata 12

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(param = duplicates) {
    let setedArr = new Set(param);
    return param.length === setedArr.length ? "Don't exist duplicated arguments" : setedArr;
}


//  kata 13

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName(arr = nameFinder, valueToFind) {
    let arrIncludesValue = arr.includes(valueToFind);
    if (arrIncludesValue) {
        return (arrIncludesValue, arr.findIndex(v => v == valueToFind));
    } else {
        return arrIncludesValue
    }
}


// kata 14

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
function repeatCounter(arr = counterWords) {
    const eachWord = arr.map(v => `${v} repeats ${arr.filter(x => x == v).length} times`)
    return eachWord.map(s => {console.log(s)})
}


// kata 15

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

function kata_15 (arr = products, value = 'Camiseta') {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(value)) console.log(arr[i]);
    }
}


// kata 16

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

function kata_16 (arr = placesToTravel) {
    for (place of arr) {
        console.log(place)
    }
}


// kata 17

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

function kata_17 (obj = alien) {
    for (adj in alien) {
        console.log(adj)
    }
}


// kata 18

const placesToTravel2 = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

function kata_18 (arr = placesToTravel2) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id != 11 && arr[i].id != 40) {
            newarr.push(arr[i]);
        }
    }
    arr = newarr;
    console.log(arr);
}


// kata 19

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

function kata_19 (arr = toys, valueToDelete = 'gato') {
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        if (!!!arr[i].name.includes(valueToDelete)) {
            newarr.push(arr[i])
        }
    }
    console.log(newarr);
}


// kata 20

const popularToys = [];
const toys2 = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];

function kata_20 (arr = toys2, popularArr = popularToys) {
    for (toy of arr) {
        if (toy.sellCount > 15) {
            popularArr.push(toy);
        }
    }
    console.log(popularArr);
}


// kata 21

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

function kata_21 (arr = users) {
    arr.forEach(v => {
        console.log( v.years >= 18 
            ? 'Usuarios mayores de edad: ' + v.name 
            : 'Usuarios menores de edad: ' + v.name 
        ) 
    })
}


// kata 22

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

function kata_22 (arr = foodSchedule, arrVegan = fruits, idVegan = 0) {
    for (let i = 0; i < arr.length; i++) {
        if (!!!arr[i].isVegan) {
            arr[i].name = fruits[idVegan];
            arr[i].isVegan = true;
            idVegan++;
        }
    }
    console.log(arr);
}


// kata 23

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

function kata_23 (arr = movies, finalObj = {sm: [], md: [], bg: []}) {
    arr.forEach(({durationInMinutes: dur, name: mvName}) => {
        if (dur < 100) finalObj.sm.push(mvName);
        if (dur >= 100 && dur < 200) finalObj.md.push(mvName);
        if (dur >= 200) finalObj.bg.push(mvName);
    })
    console.log(finalObj);
};


// kata 24

const products2 = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

function kata_24 (arr = products2) {
    const sum = arr.reduce((p, c) => p + c.sellCount, 0)
    console.log(sum);
}


// kata 25

const products3 = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
];

function kata_25 (arr = products3) {
    return arr.reduce((p, c) => p + c.sellCount, 0) / arr.length;
};


// kata 26

const goodProducts = [];
const badProducts = [];
const products4 = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

function kata_26 (arr = products4, gdArr = goodProducts, bdArr = badProducts) {
    arr.forEach(({name: nm, sellCount: sc}) => {
        if (sc > 20) { gdArr.push(nm) } 
        else { bdArr.push(nm) }
    })
    console.log('good:')
    console.log(gdArr)
    console.log('bad:')
    console.log(bdArr)
}
