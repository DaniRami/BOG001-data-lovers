/*import data from './data.js';

const canvas = document.getElementById("Mychart");
let everyone = []


async function get(url) {
    try {
        let data = await fetch(url)
        return await data.json()
    } catch (error) {
        //  console.log(`error con el servicio ${url}`);
    }
}

async function loadCharacters(url = "https://rickandmortyapi.com/api/character/") {
    let dataResult
    while (url != null) {
        dataResult = await get(url);
        everyone = everyone.concat(dataResult.results);
        url = dataResult.info.next;
    }
    var chart = new Chart(canvas, {
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
                  
            },
        }
    });
}



loadCharacters();
*/
