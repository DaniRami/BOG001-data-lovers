import data from './data.js';

const optionsHtml = document.getElementById("container");

const btnSeeMore = document.getElementById("seeMore");
btnSeeMore.addEventListener("click", more);

const eventClose = document.getElementById("closeModal");
eventClose.addEventListener("click", closeModal);

const btnFilter = document.getElementById("filter");
btnFilter.addEventListener("change", loadFilter);

const btnSort = document.getElementById("Sort");
btnSort.addEventListener("change", orderByName);

const modal = document.getElementById("myModal");


let everyone = [];
let currentPage = 1;
let everyoneTemp = [];
let allEpisodes = [];
let count = 0;

loadCharacters();
getEpisodes();


async function get(url) {
   try {
      let data = await fetch(url)
      return await data.json()
   } catch (error) {
      console.log(`error con el servicio ${url}`);
   }
}


function callPaint() {
   let everyonePage = everyone.filter(chara => chara.id >= currentPage && chara.id <= currentPage + 20);
   currentPage = currentPage + 20;
   everyoneTemp = everyoneTemp.concat(everyonePage);
   everyonePage.forEach(element => {
      paint(element);
   })
}

function more() {
   callPaint()
   if (currentPage >= everyone.length) {
      //console.log(JSON.stringify(everyone))
      document.getElementById("seeMore").disabled = true;
   }
}



async function loadCharacters(url = "https://rickandmortyapi.com/api/character/") {
   let dataResult;
   while (url != null) {
      dataResult = await get(url);
      everyone = everyone.concat(dataResult.results);
      url = dataResult.info.next;
      count = dataResult.info.count;
   }
   callPaint()
}

const paint = (everyone) => {

   let divElement = document.createElement("div");

   let imgElement = document.createElement("img");
   imgElement.src = everyone.image;
   imgElement.id = everyone.id;
   imgElement.className = "select";
   imgElement.addEventListener("click", loadModal);

   let nameElement = document.createElement("h3");
   nameElement.innerHTML = everyone.name;
   nameElement.className = "selectname";

   divElement.appendChild(imgElement);
   divElement.appendChild(nameElement);
   optionsHtml.appendChild(divElement);
};


function loadModal(event) {
   debugger
   let id = event.target.id;
   let character = everyone.find(ch => ch.id == Number(id));

   modal.style.display = "flex";
   let img = document.getElementById("imgElement");
   let contentElement = document.getElementById("contentElement");

   img.innerHTML = "";
   contentElement.innerHTML = "";

   let imgElement = document.createElement("img");
   imgElement.src = character.image;

   let nameElement = document.createElement("h3");
   nameElement.innerHTML = character.name;

   let statusGender = document.createElement("div");

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
   genderElement.innerHTML = "Gener: " + character.gender;

   let speciesElement = document.createElement("p");
   speciesElement.innerHTML = "Specie: " + character.species;
   let nameOrigin = document.createElement("p");
   nameOrigin.innerHTML = "Origin Planet: " + character.origin.name;

   statusGender.appendChild(statusElement);
   statusGender.appendChild(genderElement);
   img.appendChild(imgElement);
   contentElement.appendChild(nameElement);
   contentElement.appendChild(statusGender);
   contentElement.appendChild(speciesElement);
   contentElement.appendChild(nameOrigin);
}

function closeModal() {
   modal.style.display = "none";
}

function loadFilter(event) {
   optionsHtml.innerHTML = "";
   document.getElementById("seeMore").style.display = "none";

   let filterChapters = data.filterByEpisode(everyone, event.target.value);
   everyoneTemp = filterChapters;
   filterChapters.forEach(character => paint(character));
}


async function getEpisodes() {
   let url = "https://rickandmortyapi.com/api/episode/";
   while (url != null) {
      let data = await get(url);
      url = data.info.next;
      allEpisodes = allEpisodes.concat(data.results);
   }
   allEpisodes.forEach(element => loadEpisodes(element));
}

function loadEpisodes(allEpisode) {
   let episode = document.createElement("option");
   episode.innerHTML = allEpisode.episode + " : " + allEpisode.name;
   episode.value = allEpisode.url;
   btnFilter.appendChild(episode);
}

function orderByName() {
   let tempData = data.sortByName(everyoneTemp, "name", event.target.value);
   optionsHtml.innerHTML = "";
   tempData.forEach(element => paint(element));
}

const statistics = () => {
   const sites = data.averageLocations(everyone, count);

   let alllocations = document.getElementById('myChart').getContext('2d');
   let chartlocations = new Chart(alllocations, {
      // The type of chart we want to create
      type: 'doughnut',
      // The data for our dataset
      data: {
         labels: Object.keys(sites),
         datasets: [{
            label: 'Última ubicación conocida',
            backgroundColor: ["#176E06", "#2DDB0B", "#7BF763", "#D3FCCB", "#9BF1FD", "#38E3FB", "#04B1C9", "#037686"],
            borderWidth: 2,
            borderColor: "#FFFFFF",
            hoverBorderWidth: 4,
            data: Object.values(sites)
         }]
      },

      // Configuration options go here
      options: {
         responsive: true,
         title: {
            display: true,
            text: 'PORCENTAJE DE PERSONAJES POR UBICACIÓN ACTUAL',
            fontColor: "#FAF7F7",
            fontFamily: 'Pangolin',
            fontSize: 20,
         },
         legend: {
            display: false,
         },
      }
   });
   stadisticsStatus()
}

const stadisticsStatus = () => {
   const canvas = document.getElementById("chart").getContext('2d');
   var charts = new Chart(canvas, {
      // The type of chart we want to create
      type: 'doughnut',

      // The data for our dataset 
      data: {
         labels: ["Alive", "unknown", "Dead"],


         datasets: [{
            label: 'Estado de los personajes',
            backgroundColor: ["#7fffd4", "#808080", "#00fa9a"],
            borderWidth: 2,
            borderColor: '#ffffff',
            hoverBorderWidth: 4,
            data: data.statuschara(everyone),
         }]
      },

      // Configuration options go here
      options: {
         responsive: true,
         title: {
            display: true,
            text: 'PORCENTAJE DE PERSONAJES  ALIVE, UNKNOWN y DEAD',
            fontColor: "#FAF7F7",
            fontFamily: 'Pangolin',
            fontSize: 20,
            padding: 10,
         },
         legend: {
            display: false,
         },
      }
   });
}
const statbtn = document.getElementById("statbtn");
statbtn.addEventListener("click", statistics);





