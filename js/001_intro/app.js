/**
 * ZMIENNE
 *
 * var
 *
 *
 * const
 * let
 *
 */

// var numberOfUsers = 5;

// var todoAmount = 4;

// todoAmount = 10;

// const numberOfPosts = 5;

// const pi = 3.14;

// pi = 100;

// let name1 = "test";

// name1 = 123;

// name1 = pi;

// let numberOfTodos = 5;

// numberOfUsers = 10;

/**
 * console.log ekwiwalent print w pythonie
 *
 * narzędzia deweloperskie
 */

// console.log(name1, "cześć", 123123);

// console.log(userName);

// let userName = `test ${name1}`;

// console.log(numberOfUsers);

/**
 * typy danych
 *
 * prymitywne:
 * string
 * number
 * boolean = true false
 *
 * undefined
 * null
 *
 * typy referencyjne/złożone
 * obiekty
 * tablice
 * funkcje
 *
 */

const przykladowyString = "jakistekst 123";
const przykladowyNumber = 123.321;
const przykladowyBoolean = true;

// const przykadlowyObiekt = {
//   name: 'Jane',
//   age: 40,
//   isAdult: true,
//   // children:
//   address: {
//     street: 'Dworcowa',
//     postal: 123123,
//     city: 'Warsaw'
//   }
// }

// const adrress = {
//   street: "Dworcowa",
//   postal: 123123,
//   city: "Warsaw",
// };

// const przykadlowyObiekt = {
//   name: "Jane",
//   age: 40,
//   isAdult: true,
//   // children:
//   adrress: adrress,
// };

// console.log(przykadlowyObiekt);

/**
 * Przykładowa tablica
 */
// const users = [
//   "Jane",
//   "Jon",
//   "Jack",
//   123,
//   true,
//   { name: "John", lastName: "Doe" },
// ];

// const pierwszyElementTablicy = users[0];

/**
 * code branching
 * funkcje warunkowe - ify + wyrażenia logiczne
 *
 *
 */

// const age = "18";

// if (age === 18) {
//   const temp = 123;
//   console.log("Jesteś pełnoletni");
// } else if (age === "18") {
//   console.log("Jesteś pełnoletni ale twój wiek to string");
// } else if (age === 20) {
//   console.log(123);
// } else {
//   console.log("Żaden z powyższych warunków nie został spełniony");
// }

// /**
//  * wykonsoluj informacje dla age w przedziale od 20 do 30
//  */
// // pythonowy and
// if (age >= 20 && age <= 30) {
//   console.log("wiek jest z przedziału 20-30");
// }

// // pythonwy or
// if (age === 18 || age === 16) {
//   console.log("wiek jest równy 18 albo 16");
// }

/**
 * Zadanie:
 * Napisz warunek który będzie sprawdzał
 * czy zmienna age jest większa niż 18 jeżeli tak wyświetl w konsoli informacje (console.log) że user jest dorosły
 * w przeciwnym wypadku wyświetl wiadomosc odwrotną
 *
 * ⭐⭐Zadanie dodatkowe:
 * dodatkowo sprawdzaj czy wiek ma znaczenie dodając sprawdzenie w warunku zmienną doesAgeMatter
 */

// const doesAgeMatter = false

// const age = 18;

// if (age >= 18) {
//   console.log("Jestes dorosly");
// } else {
//   console.log("Jestes niepelnoletni");
// }

// if (age >= 18) {
//   console.log("is adult");
// } else {
//   console.log("underage");
// }

// const doesAgeMatter = true;
// const age = 20;

// if (age >= 18 && doesAgeMatter === false) {
//   console.log("Użytkownik jest dorosły");
// } else {
//   console.log("Użytkownik nie jest dorosły");
// }

// const age = 21;
// const doesAgeMatter = false;

// if (doesAgeMatter === true) {
//   if (age >= 18) {
//     console.log("user jest dorosły");
//   } else {
//     console.log("user nie jest dorosły");
//   }
// } else {
//   console.log("user jest dorosły");
// }

// if (doesAgeMatter === true && age >= 18) {
//   console.log("user jest dorosły");
// } else {
//   console.log("user nie jest dorosły");
// }

/**
 * struktury danych
 * obiekty (słowniki) i tablice
 */

const przykladowyObiekt = {
  name: "Jane",
  age: 40,
  isAdult: true,
  children: [
    { name: "Mike", age: 8 },
    { name: "Elena", age: 11 },
  ],
  address: {
    street: "Dworcowa",
    postal_code: 12312,
    city: "Warsaw",
  },
};

/**
 * Porównywanie obiektów za pomocą JSONa
 *
 * 1) serializacja obiektów do JSONa
 * 2) porównać te 2 JSONy
 */

/**
 * Obiekty są porównywane za pomocą referencji nie jest porównywana struktura
 */

// const obiekt1 = {
//   name: "John",
// };

// const obiekt2 = {
//   name: "John",
// };

/**
 * loadash bibiloteka która ma funckje do porównywania obiektów
 */

// console.log(JSON.stringify(obiekt1) === JSON.stringify(obiekt2)); //  true ??? false??

// console.log("John" === "John"); // true ?? false?

/**
 * Zdanie:
 * Utwórz obiekt (literał obiektu/słownik) user który będzie posiadał
 * następujące pola:
 *
 * name: string
 * lastName: string
 * age: number
 * todos: array of strings
 *
 *
 * Zadanie:
 * Utwórz listę/tablicę obiektów typu user niech lista zawiera 3 elementy/obiekty
 *
 * rezultat możesz wykonsolować za pomocą console.table(users)
 */

/**
 * pętle
 *
 * for
 *
 ***********************
 *
 * funkcje wyższego rzędu
 *
 * map, filter, forEach
 *
 ************************
 */

// for (let i = 0; i < 10; i++) {
//   console.log("Czesć");
// }

// const users = [
//   { name: "jane", age: 12 },
//   { name: "John", age: 8 },
// ];

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].age);
// }

/**
 * Zadanie
 * Przeiteruj się przez tablicę userów
 * i sprawdż czy userzy są dorośli (age > 18) jeżeli tak ustaw nowo dodane pole isAdult na true
 * w przeciwnym wypadku ustaw je na false
 *
 * żeby dodać nowe pole musisz odnieść się do tego pola za pomocą kropki i nazwy pola następnie
 * przypisz wartość którą chcesz np:
 *
 * const todo = {
 *  name: "pouczyć się JSa",
 * }
 *
 * todo.status = true;
 *
 * users[i].nowePole = 'wartość nowego pola'
 *
 *
 */

// const users = [
//   { name: "John", age: 23 },
//   { name: "Jane", age: 3 },
//   { name: "Jack", age: 13 },
// ];

// wersja dłuższa - niekoniecznie clean code
// for (let i = 0; i < users.length; i++) {
//   if (users[i].age >= 18) {
//     users[i].isAdult = true;
//   } else {
//     users[i].isAdult = false;
//   }
// }

// for (let i = 0; i < users.length; i++) {
//   users[i].isAdult = users[i].age >= 18;
// }

// console.table(users);

/**
 *
 * funkcje
 *
 * function
 *
 * arrow functions
 *
 */

// function sayHello(name) {
//   return `Hello ${name}`;
// }

// const greeting = sayHello("Jane");

// console.log(greeting);

// const sayHello1 = (param1, param2) => {
//   return `hello ${param1} ${param2}`;
// };

// const sayHello2 = (param1, param2) => `hello ${param1} ${param2}`;

// const test132 = sayHello1("test123", "test312");

// function addTwoNumbers(number1, number2, funckjaWyswietlajaca) {
//   const suma = number1 + number2;

//   funckjaWyswietlajaca(suma);

//   return `suma: ${suma}`;
// }

/**
 * wersja 1
 */

// const funkcjaKtoraPrzekazemy = (przekazanaSuma) => console.log(przekazanaSuma)

// addTwoNumbers(1, 2, funkcjaKtoraPrzekazemy);

// wersja 2

// addTwoNumbers(1, 2, (przekazanaSuma) => console.log(przekazanaSuma));

// console.log(addTwoNumbers(1, 2, () => {}));
/**
 * Zadanie:
 * stwórz funkcje isUserAdult zwracająca true lub false w zależności czy user przekazany w parametrze ma age>18
 *
 * function isUserAdult(user){
 *  rerturn czy user jest dorosły czy nie
 * }
 *
 * const isUserAdult = (user) =>{
 *  return czy user jest dorosły czy nie
 * }
 *
 *
 * ⭐⭐dla chętnych obsłuż przypadek gdy do funkcji przekazane są nie poprawne dane
 *
 * Zadanie:
 * stwórz funkcje getAvarageAge która przyjmie tablicę użytkowników i zwróci średnią arytmetyczną wieku użytkówników
 *
 *
 * ⭐⭐dla chętnych Zadanie
 * stwórz funckje getNumbersOfAdultsPerGender która przyjmie tablicę/listę użytkowników i zwróci obiekt/słownik
 * z dwoma kluczami numberOfAdultMales i numberOfAdultFemales
 *
 * {
 *    numberOfAdultMales: 25,
 *    numberOfAdultFemales: 12
 * }
 *
 *
 */

const user = {
  name: "Jane",
  age: 12,
};

// wersja nie clean codowa
// function isUserAdult(userObject) {
//   if (userObject.age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// preferowana wersja
function isUserAdult(userObject) {
  return userObject.age >= 18;
}

const isAdult = isUserAdult(user); // true || false

console.log(isAdult);

function getNumbersOfAdultsPerGender() {
  /**
   * Miejsce na Twój kod
   */
  return {
    numberOfAdultMales: undefined,
    numberOfAdultFemales: undefined,
  };
}
