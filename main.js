/*import { example } from './data.js';*/ 

//import  {cargarJson} datafrom './data/rickandmorty/rickandmorty.json'
const btnSeeMore = document.getElementById("seeMore");
btnSeeMore.addEventListener("click", more)

const evento = document.getElementById("closeModal");
evento.addEventListener("click", closeModal);

var personajesObj = {};
var everyone = [];

cargarPersonajes();

function more() {
   if (personajesObj.next == "https://rickandmortyapi.com/api/character/?page=30") {
      document.getElementById("seeMore").disabled = true;
   }

   cargarPersonajes(personajesObj.next);
}

function cargarPersonajes(url = "https://rickandmortyapi.com/api/character/") {
   fetch(url)
      .then(res => res.json())
      .then(res => {
         personajesObj = res.info;
         everyone = everyone.concat(res.results)
         res.results.forEach(element => {
            personajes.pintar(element);
         });
      });
}

const personajes = {
   pintar: (personajesItem) => {

      let divElement = document.createElement("div");

      let imgElement = document.createElement("img")
      imgElement.src = personajesItem.image;
      imgElement.id = personajesItem.id;
      imgElement.className = "select";
      imgElement.addEventListener("click", loadModal);

      let nameElement = document.createElement("h3");
      nameElement.innerHTML = personajesItem.name;
      nameElement.className = "selectname";

      divElement.appendChild(imgElement);
      divElement.appendChild(nameElement);

      let optionsHtml = document.getElementById("container");
      optionsHtml.appendChild(divElement);
   },
};

function loadModal(event) {
   let id = event.target.id;
   let character = everyone.find(ch => ch.id == Number(id));

   var modal = document.getElementById("myModal");
   modal.style.display = "flex";
   let img = document.getElementById("imgElement");
   let contentElement = document.getElementById("contentElement");

   img.innerHTML = "";
   contentElement.innerHTML = "";

   let imgElement = document.createElement("img")
   imgElement.src = character.image;

   let nameElement = document.createElement("h3");
   nameElement.innerHTML = character.name;

   let statusgender = document.createElement("div");

   let statusElement = document.createElement("p");
   statusElement.innerHTML = "Status: " + character.status;
   if (character.status === "Alive") {
     statusElement.style.color = "#20856B";
   } else if (character.status === "Dead") {
     statusElement.style.color = "#6E1F06";
   } else {
     statusElement.style.color = "#000000";
   }

   let genderElement = document.createElement("p");
   genderElement.innerHTML = "Genere: " + character.gender;


   let speciesElement = document.createElement("p");
   speciesElement.innerHTML = "Specie: " + character.species;
   
   let nameOrigin = document.createElement("p");
   nameOrigin.innerHTML = "Origin Planet: " + character.origin.name;
   
   img.appendChild(imgElement);
   contentElement.appendChild(nameElement);
   contentElement.appendChild(statusgender);
   statusgender.appendChild(statusElement);
   statusgender.appendChild(genderElement);
   contentElement.appendChild(speciesElement);
   contentElement.appendChild(nameOrigin);
}

function closeModal() {
   var modal = document.getElementById("myModal");
   modal.style.display = "none";
}
