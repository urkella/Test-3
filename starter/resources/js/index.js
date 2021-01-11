// Promenljive
var results = [];
var i = 0;

function readAll() {
  // Selektori
  var dodajRaspored = document.getElementById("item-container");

  dodajRaspored.innerHTML = "";

  for (key in results) {
    // Napraviti glavni kontejner od rasporeda
    var raspored = document.createElement("div");
    raspored.className = "item";
    raspored.id = `item-${results[key].id}`;

    // Dugme za brisanje rasporeda
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Izbrisi";

    const buttonId = results[key].id;
    deleteBtn.onclick = function () {
      deleteValue(buttonId);
    };

    // Dodaj porudzbinu i dugme za brisanje
    dodajRaspored.append(raspored);

    var r = results[key];

    Object.keys(r).forEach(function (key) {
      const propertyName = key.charAt(0).toUpperCase() + key.slice(1);
      var value = document.createElement("p");
      value.innerHTML = propertyName + ": " + r[key];

      if (propertyName.toLowerCase() !== "id") {
        // Dodati sve elemente osim ID-a
        raspored.appendChild(value);
      }
    });

    raspored.append(deleteBtn); // Dugme za brisanje
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
    id: i++,
  };

  if (results.length === 0) {
    results = [formaValues];
  } else {
    results.push(formaValues);
  }

  // Restartovati formu
  ev.target.reset();

  // Ispisati novi niz
  console.log(
    "Novi raspored je dodat, kliknite na Ispisi sve dodate rasporede da prikazete dodate rasporede",
    results
  );
}

// Izbrisi raspored
function deleteValue(id) {
  // Selektori
  var raspored = document.getElementById(`item-${id}`);

  function removePorudzbine() {
    // Izbrisati element iz DOM-a
    raspored.remove();

    // Izbrisati iz niza
    var izbrisiIzNiza = results.filter(function (item) {
      return item.id !== id;
    });
    results = izbrisiIzNiza;

    // Ispisati novi niz
    console.log("Rasporedi: ", results);
  }

  return removePorudzbine(); // Izbrisati raspored
}
