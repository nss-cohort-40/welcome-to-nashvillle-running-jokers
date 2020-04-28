const fetchParkEntry = (parksInput) => {
  fetch(`https://data.nashville.gov/resource/74d7-b74t.json?$q=${parksInput}&$limit=3`)
    .then(parkEntries => parkEntries.json())  // Parse as JSON
    .then(parks => {
      const parksArray = [];
      for (let i = 0; i < parks.length; i++) {
        let name = parks[i].park_name;
        const home = parks[i].mapped_location.human_address;
        const obj = JSON.parse(home);
        let address = obj.address;
        parksArray.push({ "name": name, "address": address })
      }

      console.log(parksArray);
      //call John's function that's posting to the DOM
    }
    )
}

fetchParkEntry('soccer');

const fetchArtEntry = (artsInput) => {
  fetch(`https://data.nashville.gov/resource/eviu-nxp6.json?$q=${artsInput}&$limit=3`)
    .then(artEntries => artEntries.json())  // Parse as JSON
    .then(arts => {
      const artsArray = [];
      for (let i = 0; i < arts.length; i++) {
        let name = arts[i].artwork;
        let address = arts[i].location;
        artsArray.push({ "name": name, "address": address })
      }

      console.log(artsArray);
    }
    )
}

fetchArtEntry('museum')