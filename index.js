// Recommended: All functions declared here
let cityId;
let cityKey = [];
let cityNameId;
let cityObject = {};
function cityDistancesFurthest(cityName) {
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].name == cityName) {
      cityId = cities[i].id;
      break;
    }
  }
}

for (city in distances) {
  if (cityId == distances[city].city2 || cityId == distances[city].city1) {
    if (cityId == distances[city].city2) {
      cityKey.push({
        distance: distances[city].distance,
        id: distances[city].city1,
      });
    } else {
      cityKey.push({
        distance: distances[city].distance,
        id: distances[city].city2,
      });
    }
  }
}
console.log(cityKey);
let furthestCity = null;

for (let i = 0; i < cityKey.length; i++) {
  if (cityKey[i].distance > furthestCity) {
    furthestCity = cityKey[i].distance;
    cityNameId = cityKey[i].id;
    console.log(cityNameId);
  }
  furthestCity = cityKey[0].distance;
}

let furthestCityName;
for (let i = 0; i < cities.length; i++) {
  if (cities[i].id == cityNameId) {
    furthestCityName = cities[i].name;
    console.log(furthestCityName);
  }
}
cityObject.distance = furthestCity;
cityObject.id = cityNameId;
cityObject.name = furthestCityName;

console.log(cityObject);
//return cityObject;

function cityDistancesClosest(cityName) {
  let cityKey = [];
  let cityNameId;
  let cityObject = {};

  let cityId;
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].name == cityName) {
      cityId = cities[i].id;
      break;
    }
  }
  for (city in distances) {
    if (cityId == distances[city].city2 || cityId == distances[city].city1) {
      if (cityId == distances[city].city2) {
        cityKey.push({
          distance: distances[city].distance,
          id: distances[city].city1,
        });
      } else {
        cityKey.push({
          distance: distances[city].distance,
          id: distances[city].city2,
        });
      }
    }
  }
  let closestCity = cityKey[0].distance;

  console.log(cityKey);

  for (let i = 0; i < cityKey.length; i++) {
    console.log(cities[i]);
    if (cityKey[i].distance < closestCity) {
      closestCity = cityKey[i].distance;
      cityNameId = cityKey[i].id;
      console.log(cityNameId);
    }
  }

  let closestCityName;
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].id == cityNameId) {
      closestCityName = cities[i].name;
    }
  }

  cityObject.distance = closestCity;
  cityObject.id = cityNameId;
  cityObject.name = closestCityName;

  console.log(cityObject);
  return cityObject;
}

// Recommended: constants with references to existing HTML-elements
const title = document.querySelector("title");
const cityTitle = document.querySelector("h2");
const cityUndertitle = document.querySelector("h3");
const cityBox = document.querySelector("#cities");
const cityTable = document.querySelector("#table");

// Recommended: Ask for the city name and then the rest of the code
const cityName = prompt("Vilken stad?");
let cityWasFound = false;

for (cityKey in cities) {
  if (cityName == cities[cityKey].name) {
    cityWasFound = true;
    cityTitle.innerHTML = `${cityName} (${cities[cityKey].country})`;
    title.innerHTML = cityName;

    break; //Loopen avslutas om stad hittas eller inte hittas. Om break inte används kommer den fortsätta och aldrig sluta.
  }
}

if (cityWasFound == false) {
  cityTitle.innerHTML += cityName + "Finns inte i databasen";
  cityUndertitle.innerHTML = "";
  title.innerHTML = "Not fround";
}

//Stad rutor
const cityClosest = cityDistancesClosest(cityName);
const cityFurthest = cityDistancesFurthest(cityName);

for (let i = 0; i < cities.length; i++) {
  let cityBoxP = document.createElement("p");
  cityBoxP.classList.add("cityBox");
  cityBoxP.textContent = cities[i].name;
  cityBox.appendChild(cityBoxP);

  if (cityName == cities[i].name) {
    cityBoxP.classList.add("target");
  }

  if (cities[i].is == cityClosest.id) {
    cityBoxP.classList.add("furthest");
    cityBoxP.textContent = `${cityFurthest.name} ligger ${
      cityFurthest.distance / 10
    } mil bort`;
    cityDetails.textContent = `Av städerna i databasen ligger ${cityClosest.name} närmast och ${cityFurthest.name} längst bort`;
  }
}

cityTable.style.gridTemplateRows = "repeat(40, 1fr)";
for (let row = 0; row <= 39; row++) {
  for (let col = 0; col <= 39; col++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");

    if (row == 0) {
      cell.classList.add("head_row");
      cell.textContent = col - 1;
    }

    if (row >= 1 && col >= 1) {
      for (key in distances) {
        if (
          distances[key].city1 == col - 1 &&
          distances[key].city2 == row - 1
        ) {
          cell.textContent = distances[key].distance / 10;
        }
        if (
          distances[key].city2 == col - 1 &&
          distances[key].city1 == row - 1
        ) {
          cell.textContent = distances[key].distance / 10;
        }
      }
    }
    if (row == col) {
      cell.textContent = "";
    }

    if (col == 0) {
      cell.classList.add("head_column");
    }
    if (col % 2 == 1) {
      cell.classList.add("even_col");
    }
    if (row % 2 == 1 && col != 0) {
      cell.classList.add("even_row");
    }
    if (col == 0 && row >= 1) {
      cell.textContent = cities[row - 1].id + " - " + cities[row - 1].name;
    }

    cityTable.appendChild(cell);
  }
}
