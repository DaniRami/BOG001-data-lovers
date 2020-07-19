import data from '../src/data.js';
import rickandmorty from "../src/data/rickandmorty/mockdata.js";
import mockData from './mockData';

describe('data.filterByEpisode', () => {
  it('is a function', () => {
    expect(typeof data.filterByEpisode).toBe('function');
  });

  it('deberia retornar un object para el episodio 13', () => {
    expect(typeof data.filterByEpisode(rickandmorty.results, "https://rickandmortyapi.com/api/episode/13")).toBe('object');
  });

  it('deberia retornar Abradolf Lincler para el episodio 10', () => {
    expect(data.filterByEpisode(rickandmorty.results, "https://rickandmortyapi.com/api/episode/10")[0].name).toBe('Abradolf Lincler');
  });

  it('deberia retornar 2 perdonajes para el episodio 11', () => {
    expect(data.filterByEpisode(rickandmorty.results, "https://rickandmortyapi.com/api/episode/11")).toHaveLength(2);
  });
  it('deberia retornar un array filtrado de objetos', () => {
    const filteredArray = [{
      "id": 7,
      "name": "Abradolf Lincler",
      "status": "unknown",
      "species": "Human",
      "type": "Genetic experiment",
      "gender": "Male",
      "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "location": {
        "name": "Testicle Monster Dimension",
        "url": "https://rickandmortyapi.com/api/location/21"
      },
      "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/7.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11"
      ],
      "url": "https://rickandmortyapi.com/api/character/7",
      "created": "2017-11-04T19:59:20.523Z"
    }, {
      "id": 436,
      "name": "Giant Testicle Monster",
      "status": "Alive",
      "species": "Animal",
      "type": "Monster",
      "gender": "unknown",
      "origin": {
        "name": "Testicle Monster Dimension",
        "url": "https://rickandmortyapi.com/api/location/21"
      },
      "location": {
        "name": "Testicle Monster Dimension",
        "url": "https://rickandmortyapi.com/api/location/21"
      },
      "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/436.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/13"
      ],
      "url": "https://rickandmortyapi.com/api/character/436",
      "created": "2018-04-16T22:33:01.337Z"
    }];
    expect(data.filterByEpisode(rickandmorty.results, "https://rickandmortyapi.com/api/episode/11")).toEqual(filteredArray)
  })

});

describe('data.sortByName', () => {
  it('is a function', () => {
    expect(typeof data.sortByName).toBe('function');
  });

  it('deberia retornar un object', () => {
    expect(typeof data.sortByName(rickandmorty.results, "name", "ascendente")).toBe('object');
  });

  it('deberia retornar Abadango Cluster Princess para ascendente', () => {
    expect(data.sortByName(rickandmorty.results, "name", "Ascendente")[0].name).toBe('Abadango Cluster Princess');
  });

  it('deberia retornar Giant Testicle Monster para descendente', () => {
    expect(data.sortByName(rickandmorty.results, "name", "Descendente")[0].name).toBe("Giant Testicle Monster");
  });
  const sortedArray = [{
    "id": 436,
    "name": "Giant Testicle Monster",
    "status": "Alive",
    "species": "Animal",
    "type": "Monster",
    "gender": "unknown",
    "origin": {
      "name": "Testicle Monster Dimension",
      "url": "https://rickandmortyapi.com/api/location/21"
    },
    "location": {
      "name": "Testicle Monster Dimension",
      "url": "https://rickandmortyapi.com/api/location/21"
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/436.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/13"
    ],
    "url": "https://rickandmortyapi.com/api/character/436",
    "created": "2018-04-16T22:33:01.337Z"
  }, {
    "id": 7,
    "name": "Abradolf Lincler",
    "status": "unknown",
    "species": "Human",
    "type": "Genetic experiment",
    "gender": "Male",
    "origin": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "location": {
      "name": "Testicle Monster Dimension",
      "url": "https://rickandmortyapi.com/api/location/21"
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/7.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11"
    ],
    "url": "https://rickandmortyapi.com/api/character/7",
    "created": "2017-11-04T19:59:20.523Z"
  }, {
    "id": 6,
    "name": "Abadango Cluster Princess",
    "status": "Alive",
    "species": "Alien",
    "type": "",
    "gender": "Female",
    "origin": {
      "name": "Abadango",
      "url": "https://rickandmortyapi.com/api/location/2"
    },
    "location": {
      "name": "Abadango",
      "url": "https://rickandmortyapi.com/api/location/2"
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/6.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/27"
    ],
    "url": "https://rickandmortyapi.com/api/character/6",
    "created": "2017-11-04T19:50:28.250Z"
  }];
  it('deberia retornar Giant Testicle Monster para descendente', () => {
    expect(data.sortByName(rickandmorty.results, "name", "Descendente")).toEqual(sortedArray);
  });
});

describe('data.averageLocations', () => {
  it('is a function', () => {
    expect(typeof data.averageLocations).toBe('function');
  });

  it('deberia retornar un object', () => {
    expect(typeof data.averageLocations(rickandmorty.results, rickandmorty.info.count)).toBe('object');
  });

  it('deberia retornar 33.33 para Abadango', () => {
    expect(data.averageLocations(rickandmorty.results, rickandmorty.info.count)['Abadango']).toBe('33.33');
  });

  it('deberia retornar array con others, Testicle Monster Dimension y Abadango un para keys', () => {
    const planets = ['Others', 'Testicle Monster Dimension', 'Abadango'];
    expect(Object.keys(data.averageLocations(rickandmorty.results, rickandmorty.info.count))).toEqual(planets);
  });
  describe('data.statuschara', () => {
    it('is a function', () => {
      expect(typeof data.statuschara).toBe('function');
    });

    it('deberia retornar un object', () => {
      expect(typeof data.statuschara(mockData)).toBe('object');
    });

    it('deberia retornar 12.69 para  unknown', () => {
      expect(data.statuschara(mockData)[1]).toBe('12.69');
    });

    it('deberia retornar array con Alive, unknown y Dead', () => {
      const status = ['57.70', '12.69', '29.61'];
      expect(data.statuschara(mockData)).toStrictEqual(status);
    });
  });

});


