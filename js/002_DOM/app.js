/**
 * DOM przeglądarka interpretuje kod HTML i dostarcza obiekt, który JS jest w stanie odczytywać i modyfikować
 */

/**
 * obiekt document
 */

console.log(document);

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

// const divElement = document.createElement("div");

const divElement = document.createElement("div");

const userName = "Jane";

divElement.innerHTML = "cześć jak się masz";

// document.body.appendChild(divElement);

/**
 * Pobieranie elementów z dokumentu HTML
 */

// 1) metoda querySelector

const divOuput = document.querySelector("#output");

// divOuput.appendChild(divElement);

console.log(divOuput);

// 2) metoda getElementById

const divOuput1 = document.getElementById("output");

// console.log(checkbox);

/**
 * manipulowanie classami - lista klas jest dostępna pod polem classList
 * dodatkowo można manipulować tymi klasami przy pomocy dużej gamy metod dostępnej też pod tym polem
 */

divElement.classList.add("super-div");

// if (divElement.classList.contains("jfjhbfh")) {
//   console.log("div element zawiera klase super-div");
// }

divElement.classList.remove("super-div");

divOuput.appendChild(divElement);

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

// const usersStaticTable = document.querySelector("#usersStaticTable");

// usersStaticTable.remove();

// document.body.remove()

/**
 * Eventy, event listnery - interakcja z UI
 */

// document.addEventListener("click", (event) => {
//   console.log("CLick", event);
// });

// document.querySelector("#name").addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

/**
 * przyciski usuwanie elementu
 */

// const deleteButton = document.querySelector("#deleteButton");

// deleteButton.addEventListener("click", (event) => {
//   event.target.parentNode.parentNode.remove();
// });

const usersStaticTable = document.querySelector("#usersStaticTable");

usersStaticTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteButton")) {
    event.target.parentNode.parentNode.remove();
  }
});

/**
 * pobranie elmentu HTMLowego form i przypisanie go do zmiennej
 */
const dynamicUserForm = document.getElementById("dynamicUserForm");

/**
 * dodanie event listenra - będziemy "nasłuchiwać" na moment gdy user kliknie przysisk typu "submit" lub enter i
 * wykonamy funkcje strzałkową przekazaną jako 2 paramter
 */
dynamicUserForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const lastName = document.querySelector("#lastname").value;
  const age = document.querySelector("#age").value;

  const tbody = document.querySelector("#dynamic-users");

  const tr = document.createElement("tr");

  const tds = `
    <td>${name}</td>
    <td>${lastName}</td>
    <td>${age}</td>
    <td><button class="deleteButton" role="button">&times;</button></td>
  `;

  tr.innerHTML = tds;

  tbody.appendChild(tr);

  event.target.reset();

  /**
   * 1) wyłączenie defaultowego zachowania
   * 2) pobranie wpisanych wartości z inputów i przypisanie ich do zmiennych
   * 3) stworzenie nowego usera na podstawie tych wartosci + id
   * 4*) dodatnie go do pamięci (zmiennej)
   * 5) aktualizacja UIa
   * 6) wyczyszczenie pól/inputów
   */
});
