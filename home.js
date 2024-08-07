//Alla: funktion som hämtar alla planeter och som sätter färg på planeterna
async function fetchAllPlanets() {
  try {
    let resp = await fetch(
      "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",
      {
        method: "GET",
        headers: { "x-zocom": `${apiKey.key}` },
      }
    );

    let data = await resp.json();

    let planets = data.bodies;
    let mainRef = document.querySelectorAll(".dot");
    for (let i = 0; i < planets.length; i++) {
      planets[i].color = setPlanetColors(i);
      mainRef[i].style.backgroundColor = setPlanetColors(i);
    }

    localStorage.setItem("data", JSON.stringify(planets));
  } catch (error) {
    console.log(error);
  }
}

//Alla: funktion som lägger till ett färgattribut på varje planet
function setPlanetColors(planetId) {
  let colorArray = [
    "#ffd900",
    "#808080",
    "#ffc0cb",
    "#418fe9",
    "#f84646",
    "#f4a460",
    "#d4c683",
    "#add8e6",
    "#89b3da",
  ];

  return colorArray[planetId];
}

// Alla: byt namn när man hovrar över planeten
function setEventsOnPlanets() {
  let planets = document.querySelectorAll(".dot");

  let solarSystem = JSON.parse(localStorage.getItem("data"));

  let nameRef = document.querySelector(".my_second_header");

  for (let planet of planets) {
    planet.addEventListener("mouseenter", () => {
      nameRef.textContent = `${solarSystem[planet.id].name}`;
    });

    planet.addEventListener("mouseleave", () => {
      nameRef.textContent = "SOLARIS";
    });

    planet.addEventListener("click", () => {
      setActivePlanet(solarSystem[planet.id]);
      window.location.href = "singlePage.html";
      history.forward();
    });
  }
}

//Alla: sparar den aktiva planeten i localStorage
function setActivePlanet(planetData) {
  localStorage.setItem("activePlanet", JSON.stringify(planetData));
}

fetchAllPlanets();
setEventsOnPlanets();
