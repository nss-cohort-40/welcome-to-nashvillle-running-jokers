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
      try {
        for (let i = 0; i < music._embedded.events.length && i < 3; i++) {
          let name = music._embedded.events[i].name;
          let address = music._embedded.events[i]._embedded.venues[0].name;
          musicArray.push({ name: name, address: address });
        }
      } catch (err) {
      }
      musicArray.push("Music");
      musicArray.push("musicOutput");

      outputResultsToDOM(musicArray);
    });
};

const fetchRestaurant = (uInput) => {
  fetch("https:/opentable.herokuapp.com/api/restaurants?city=Nashville")
    .then((response) => response.json())
    .then((data) => {
      let restaurants = data.restaurants;
      let arrayRestaurants = [];
      arrayRestaurants.push("Restaurants");
      arrayRestaurants.push("foodOutput");
      for (let i = 0; i < restaurants.length; i++) {
        if (restaurants[i].name.toLowerCase().includes(uInput.toLowerCase())) {
          let rr = {};
          rr.name = restaurants[i].name;
          rr.address = restaurants[i].address;
          arrayRestaurants.unshift(rr);
        }
        if (arrayRestaurants.length >= 5) {
          break;
        }
      }
      outputResultsToDOM(arrayRestaurants);
    });
};

const fetchItinerary = () => {
  fetch("http://localhost:8088/itinerary")
  .then((response) => response.json())
  .then((data) => {
    if (data[0] != undefined){
      console.log(data)
      document.getElementById("parksOutput").innerHTML = data[0].park
      document.getElementById("artOutput").innerHTML = data[0].art
      document.getElementById("foodOutput").innerHTML = data[0].food
      document.getElementById("musicOutput").innerHTML = data[0].music
    } else {
      let object = {
        id: 1,
        park: "",
        art: "",
        food: "",
        music: ""
      }
      postToServer(object, "http://localhost:8088/itinerary")
    }
  })
}
fetchItinerary()