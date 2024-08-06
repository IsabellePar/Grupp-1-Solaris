//Alla: hämtar och returnerar aktuell planet från localStorage
function getPlanetData() {
    let activePlanet = JSON.parse(localStorage.getItem("activePlanet"));
    console.log(activePlanet);
    console.log(activePlanet.desc);
    return activePlanet;
}

//Alla: visar upp planetens info på sidan
function displayPlanet() {
    let planetInfo = getPlanetData();
    console.log(planetInfo.name);
    let titleRef = document.querySelector(".article_for_text>h2");
    titleRef.textContent = planetInfo.name;
    let latinName = document.querySelector(".text_for_planet");
    latinName.textContent = planetInfo.latinName;
    let planetDesc = document.querySelector(".info_for_text>p");
    planetDesc.textContent = planetInfo.desc;
    let omkretsInfo = document.querySelector(".answer_omkrets");
    omkretsInfo.textContent = formatNumberWithSpaces(planetInfo.circumference) + " km";
    let maxTempInfo = document.querySelector(".answer_max_temperatur");
    maxTempInfo.textContent = planetInfo.temp.day + " C";
    let kmFromSun=document.querySelector(".answer_km");
    kmFromSun.textContent=formatNumberWithSpaces(planetInfo.distance) + " km";
    let minTempInfo = document.querySelector(".answer_min_temp");
    minTempInfo.textContent = planetInfo.temp.night + " C";
    let moonsCount = document.querySelector(".moons");
    let joined = planetInfo.moons.join(", ");
    moonsCount.textContent = joined;
    let circle = document.querySelectorAll(".my_aside > *");
    circle.forEach(c => {c.style.backgroundColor = planetInfo.color});
  }

displayPlanet();


//Isabelle: formatterar stora tal så att de visas upp med mellanslag
function formatNumberWithSpaces(number) {
    const formatter = new Intl.NumberFormat('sv-SE');
    return formatter.format(number);
}