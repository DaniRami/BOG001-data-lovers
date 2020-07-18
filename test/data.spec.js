import  data from '../src/data.js';
import rickandmorty from "../src/data/rickandmorty/mockdata.js";

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

});

describe('data.sortByName', () => {
  it('is a function', () => {
    expect(typeof data.sortByName).toBe('function');
  });

  it('deberia retornar un object', () => {
    expect(typeof data.sortByName(rickandmorty.results, "name","ascendente")).toBe('object');
  });

  it('deberia retornar Abadango Cluster Princess para ascendente', () => {
    expect(data.sortByName(rickandmorty.results,"name", "Ascendente")[0].name).toBe('Abadango Cluster Princess');
  });

  it('deberia retornar Giant Testicle Monster para descendente', () => {
    expect(data.sortByName(rickandmorty.results, "name","Descendente")[0].name).toBe("Giant Testicle Monster");
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
    expect(data.averageLocations(rickandmorty.results,rickandmorty.info.count)['Abadango']).toBe('33.33');
  });

  it('deberia retornar array con Testicle Monster Dimension y Abadango un para keys', () => {
    expect(Object.keys(data.averageLocations(rickandmorty.results,rickandmorty.info.count))).toStrictEqual(['Testicle Monster Dimension', 'Abadango']);
  });

});
