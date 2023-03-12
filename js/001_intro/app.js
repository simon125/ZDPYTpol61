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

// const numberOfPosts = 5;

// let numberOfTodos = 5;

// numberOfUsers = 10;

/**
 * console.log ekwiwalent print w pythonie
 *
 * narzędzia deweloperskie
 */

// console.log(numberOfUsers);

/**
 * typy danych
 *
 * prymitywne:
 * string
 * number
 * boolean
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

/**
 * code branching
 * funkcje warunkowe - ify + wyrażenia logiczne
 *
 *
 */

/**
 * Zadanie:
 * Napisz warunek który będzie sprawdzał
 * czy zmienna age jest większa niż 18 jeżeli tak wyświetl w konsoli informacje (console.log) że user jest dorosły
 * w przeciwnym wypadku wyświetl wiadomosc odwrotną
 *
 * ⭐⭐Zadanie dodatkowe:
 * dodatkowo sprawdzaj czy wiek ma znaczenie dodając sprawdzenie w warunku zmienną doesAgeMatter
 */

/**
 * struktury danych
 * obiekty (słowniki) i tablice
 */

/**
 * Porównywanie obiektów za pomocą JSONa
 *
 * 1) serializacja obiektów do JSONa
 * 2) porównać te 2 JSONy
 */

/**
 * Obiekty są porównywane za pomocą referencji nie jest porównywana struktura
 */

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
 */

/**
 * funkcje
 *
 * function
 *
 * arrow functions
 */

/**
 * Zadanie:
 * stwórz funkcje isUserAdult zwracająca true lub false w zależności czy user przekazany w parametrze ma age>18
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

function getNumbersOfAdultsPerGender() {
  /**
   * Miejsce na Twój kod
   */
  return {
    numberOfAdultMales: undefined,
    numberOfAdultFemales: undefined,
  };
}
