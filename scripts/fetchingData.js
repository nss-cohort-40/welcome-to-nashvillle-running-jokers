const fetchParkEntry = (parksInput) => {
  fetch(`https://data.nashville.gov/resource/74d7-b74t.json?$q=${parksInput}&$limit=3`)
    .then(parkEntries => parkEntries.json())  // Parse as JSON
    .then(parks => {
      let name1 = parks[0].park_name;
      const home1 = parks[0].mapped_location.human_address;
      const obj1 = JSON.parse(home1);
      let address1 = obj1.address;
      console.log(`${name1} is located at ${address1}`)

      let name2 = parks[1].park_name;
      const home2 = parks[1].mapped_location.human_address;
      const obj2 = JSON.parse(home2);
      let address2 = obj2.address;
      console.log(`${name2} is located at ${address2}`);

      let name3 = parks[2].park_name;
      const home3 = parks[2].mapped_location.human_address;
      const obj3 = JSON.parse(home3);
      let address3 = obj3.address;
      console.log(`${name3} is located at ${address3}`);

      return [{ name: name1, address: address1 }, { name: name2, address: address2 }, { name: name3, address: address3 }];
    }
    )
}

fetchParkEntry("soccer");

//fetchArtEntry

const fetchArtEntry = (artsInput) => {
  fetch(`https://data.nashville.gov/resource/eviu-nxp6.json?$q=${artsInput}&$limit=3`)
    .then(artEntries => artEntries.json())  // Parse as JSON
    .then(arts => {
      let name1 = arts[0].artwork;
      let address1 = arts[0].location;
      console.log(`${name1} is located at ${address1}`);

      let name2 = arts[1].artwork;
      let address2 = arts[1].location;
      console.log(`${name2} is located at ${address2}`);

      let name3 = arts[2].artwork;
      let address3 = arts[2].location;
      console.log(`${name3} is located at ${address3}`);

      return [{ name: name1, address: address1 }, { name: name2, address: address2 }, { name: name3, address: address3 }];
    }
    )
}

fetchArtEntry("people");