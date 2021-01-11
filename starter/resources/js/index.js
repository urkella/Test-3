let results = [];

function readAll() {
  // Selektori
  var dodajRaspored = document.getElementById("item-container");

  dodajRaspored.innerHTML = "";

  for (key in results) {
    // Napraviti glavni kontejner od rasporeda
    var raspored = document.createElement("div");
    raspored.className = "item";
    raspored.id = `item-${key}`;

    // Dugme za brisanje rasporeda
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Izbrisi";

    // Dugme za brisanje rasporeda
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Promeni profesora";

    const buttonId = key;
    deleteBtn.onclick = function () {
      deleteValue(buttonId);
    };

    // Dodaj porudzbinu i dugme za brisanje
    dodajRaspored.append(raspored);

    var r = results[key];

    for (var key in r) {
      var value = document.createElement("p");
      value.innerHTML = r[key];

      raspored.appendChild(value); // raspored
    }

    raspored.append(deleteBtn); // Dugme za brisanje
    raspored.append(editBtn); // Dugme za brisanje
  }

  console.log("Rasporedi: ", results);
}

function handleValues(ev) {
  // Preventovati refresh
  ev.preventDefault();

  // Napraviti nov form object
  var forma = new FormData(ev.target);

  // Posle submita uhvatiti form values
  var formaValues = {
    predmet: forma.get("predmet"),
    profesor: forma.get("profesor"),
    datum: forma.get("datum"),
    vreme: forma.get("vreme"),
  };

  if (results.length === 0) {
    results = [formaValues];
  } else {
    results.push(formaValues);
  }
}

// Izbrisi raspored
function deleteValue(id) {
  // Selektori
  var raspored = document.getElementById(`item-${id}`);
  var izbrisiIzNiza = results.filter(function (item, index) {
    return String(index) !== id;
  });

  results = izbrisiIzNiza;

  function removePorudzbine() {
    raspored.remove();
  }

  console.log("Rasporedi: ", results);
  return removePorudzbine(); // Izbrisati raspored
}
