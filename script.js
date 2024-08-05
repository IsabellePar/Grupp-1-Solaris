//function Andrej, Arbnor
async function fetchAllPlanets() {
    
    let resp = await fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
        method: 'GET',
        headers: {'x-zocom': `${apiKey.key}`}
    });
    
    let data = await resp.json();
    
   // console.log(data.bodies);

    localStorage.setItem("data", JSON.stringify(data.bodies));
    
};

// Alla: byt namn när man hovrar över planeten
function setEventsOnPlanets(){
    
    let planets = document.querySelectorAll(".dot");

    let solarSystem = JSON.parse(localStorage.getItem("data"));
    console.log(solarSystem);
    let nameRef = document.querySelector('.my_second_header');

    console.log(planets);
    for(let planet of planets){
        planet.addEventListener("mouseenter", () => {
            nameRef.textContent = `${solarSystem[planet.id].name}`
        });

        planet.addEventListener("mouseleave", () => {
            nameRef.textContent = 'SOLARIS';
        })
        
        planet.addEventListener("click", () => {
            setActivePlanet(solarSystem[planet.id]);
        })
    }
}

//Alla: sparar den aktiva planeten i localStorage
function setActivePlanet(planetData) {
    localStorage.setItem('activePlanet', JSON.stringify(planetData));
}

fetchAllPlanets();
setEventsOnPlanets();