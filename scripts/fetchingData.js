const fetchParkEntry = (parksInput) => {
  fetch(
    `https://data.nashville.gov/resource/74d7-b74t.json?$q=${parksInput}&$limit=3`
  )
    .then((parkEntries) => parkEntries.json())
    .then((parks) => {
      const parksArray = [];
      for (let i = 0; i < parks.length; i++) {
        let name = parks[i].park_name;
        const home = parks[i].mapped_location.human_address;
        const obj = JSON.parse(home);
        let address = obj.address;
        parksArray.push({ name: name, address: address });
      }
      parksArray.push("Park");
      parksArray.push("parksOutput");
      console.log(parksArray);
      outputResultsToDOM(parksArray);
    });
};

const fetchArtEntry = (artsInput) => {
  fetch(
    `https://data.nashville.gov/resource/eviu-nxp6.json?$q=${artsInput}&$limit=3`
  )
    .then((artEntries) => artEntries.json())
    .then((arts) => {
      const artsArray = [];
      for (let i = 0; i < arts.length; i++) {
        let name = arts[i].artwork;
        let address = arts[i].location;
        artsArray.push({ name: name, address: address });
      }

      artsArray.push("Art");
      artsArray.push("artOutput");

      outputResultsToDOM(artsArray);
    });
};

const fetchMusicEntry = (musicInput) => {
  let apiURL = "https://app.ticketmaster.com/discovery/v2/events";
  let apiKey = appKeys.appKey;
  fetch(`${apiURL}?classificationName=${musicInput}&dmaId=343&${apiKey}`)
    .then((music) => music.json())
    .then((music) => {
      const musicArray = [];
      for (let i = 0; i < 3; i++) {
        let name = music._embedded.events[i].name;
        let address = music._embedded.events[i]._embedded.venues[0].name;
        musicArray.push({ name: name, address: address });
      }
      musicArray.push("Music");
      musicArray.push("musicOutput");

      outputResultsToDOM(musicArray);
    });
};
