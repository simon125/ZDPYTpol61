/**
 * DOM przeglądarka interpretuje kod HTML i dostarcza obiekt, który JS jest w stanie odczytywać i modyfikować
 */

/**
 * obiekt document
 */

// document.body  // po kropce możemy dostać wiele pól związanych z naszym dokumentem
// najlepszą formą sprawdzenia co jest dostępne w obiekcie document jest sprawdzenie go w konsoli deweloperskiej w przeglądarce

/**
 * Tworzenie elementu
 *
 * 1) createElement
 *
 * 2) template string (backticki - znaki pojedynczego cudzysłowia pod klawiszem esc) + właściwość innerHTML/innerText
 *
 */

const divElement = document.createElement("div");

/**
 * Pobieranie elementów z dokumentu HTML
 */

// 1) metoda querySelector

// 2) metoda getElementById

// console.log(checkbox);

/**
 * manipulowanie classami - lista klas jest dostępna pod polem classList
 * dodatkowo można manipulować tymi klasami przy pomocy dużej gamy metod dostępnej też pod tym polem
 */

/**
 * Wstawianie elementu / osadzanie w dokumencie
 *
 * appendChild - metoda dostępna na każdym elemencie HTMLowym/Nodzie
 *
 * innerHTML - pole/właściwosć elementów HTMLowych/Nodów do której mozemy przypisać html napisanego za pomocą stringa
 *
 */

/**
 * Usuwanie elementu - metoda remove dostępna na elemencie HTML/Nodzie
 */

// document.body.remove()

/**
 * Eventy, event listnery - interakcja z UI
 */

/**
 * przyciski usuwanie elementu
 */

/**
 * pobranie elmentu HTMLowego form i przypisanie go do zmiennej
 */
const dynamicUserForm = document.getElementById("dynamicUserForm");

/**
 * dodanie event listenra - będziemy "nasłuchiwać" na moment gdy user kliknie przysisk typu "submit" lub enter i
 * wykonamy funkcje strzałkową przekazaną jako 2 paramter
 */
dynamicUserForm.addEventListener("submit", (event) => {
  /**
   * 1) wyłączenie defaultowego zachowania
   * 2) pobranie wpisanych wartości z inputów i przypisanie ich do zmiennych
   * 3) stworzenie nowego usera na podstawie tych wartosci + id
   * 4) dodatnie go do pamięci (zmiennej)
   * 5) aktualizacja UIa
   * 6) wyczyszczenie pól/inputów
   */
});
