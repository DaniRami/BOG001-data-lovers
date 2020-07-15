const data = {
  
  sortByDimension: (data, sortBy, sortOrder) => {
  let dataOrganizada = data.sort((a, b) => a.location.name > b.location.name ? 1 : -1);
  if(sortOrder === 'descendente'){
    dataOrganizada = dataOrganizada.reverse()       
    }
    return dataOrganizada;
    
  },
  
  filterCharacters: (character, listCharacters) => {
    let filtered = listCharacters.filter(epi => epi.episode.some(e => e == character))
    return filtered;
  }
}

statusByChara: (dato, status) => {
 let  


}






export default data;
  







