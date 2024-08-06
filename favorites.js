window.addEventListener("load", () => {
    let mainRef = document.querySelector("main");
    let allFavoriteIDs = JSON.parse(localStorage.getItem("favoritedPlanets"));
    let allPlanetData = JSON.parse(localStorage.getItem("data"));
    for(let favoriteID of allFavoriteIDs){
        let currentPlanetData = allPlanetData[favoriteID];
        console.log(favoriteID);
        console.log(currentPlanetData);
        

        let cardElement = document.createElement("section");
        cardElement.classList.add("card");
        
        let figureElement = document.createElement("figure");
        let imageElement = document.createElement("img");
        imageElement.style.backgroundColor = currentPlanetData.color;
        figureElement.appendChild(imageElement);

        let h2Element = document.createElement("h2");
        h2Element.textContent = currentPlanetData.name;

        cardElement.appendChild(figureElement);
        cardElement.appendChild(h2Element);

        mainRef.appendChild(cardElement);

        cardElement.addEventListener("click", () => {
            setActivePlanet(allPlanetData[favoriteID]);
            window.location.href = "singlePage.html";
            history.forward();
        });

    }


    
})


function setActivePlanet(planetData) {
    localStorage.setItem('activePlanet', JSON.stringify(planetData));
}


let myHeader=document.querySelector(".home");
let buttonClass=document.querySelector(".menu");

for(let i=0; i<myHeader.length;i++)
{
    myHeader[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

/* for(let i=0; i<myHeader.length;i++)
    {
        myHeader[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("my");
      current[0].className = current[0].className.replace(" my", "");
      this.className += " my";
      });
    } */