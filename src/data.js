const data = {

  sortByName: (data, sortBy, sortOrder) => {
    let sortedData = data.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
    if (sortOrder === 'Descendente') {
      sortedData = sortedData.reverse();
    }
    return sortedData;

  },

  filterByEpisode: (data, selectedEpisode) => {
    let filtered = data.filter(character => character.episode.some(e => e == selectedEpisode));
    return filtered;
  },

  averageLocations: (data, count) => {
    let locations = {};
    data.forEach(character => {
      if (character.location.name in locations) {
        locations[character.location.name] += 1;
      } else {
        locations[character.location.name] = 1;
      }
    })
    for (let knownlocation in locations) {
      let average = ((locations[knownlocation] / count) * 100).toFixed(2);
      locations[knownlocation] = average;
    }
    return locations;
  },
  statuschara: (everyone) => {
    let arrayStatus = ["Alive", "unknown", "Dead"]
    let result = [];
    let total = everyone.length
    arrayStatus.forEach((state) => {
      let dataResult = everyone.filter(s => s.status == state)
      let count = dataResult.length
      result.push(((count / total)* 100).toFixed(2));
    })
    return result;
  }
}





export default data;
