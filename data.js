import fetch from "node-fetch";

export const get = async (url) => {
   let data = await fetch(url)
   let personajes = await data.json()
   return personajes;
};

/*export const anotherExample = () => {
  return 'OMG';
};*/

