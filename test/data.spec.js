import  filertEpisode  from '../src/data.js';
/*import data from "../src/data/rickandmorty/rickandmorty.js"*/


 
describe('filertEpisode', () => {
  it('is a function', () => {
    expect(typeof allfunction.filterepisode).toBe('function');
  });

  it('deberia retornar un array para el episodio 30', () => {
    expect(typeof allfunction.filterepisode(data.results, 30)).toBe('object');
  });

  it('deberia retornar Blim Blam para el episodio 14', () => {
    expect(allfunction.filterepisode(data.results, 14)[6].name).toBe('Blim Blam');
  });

  it('deberia retornar 13 personajes para el episodio 4', () => {
    expect(allfunction.filterepisode(data.results, 4)).toHaveLength(13);
  });

});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
