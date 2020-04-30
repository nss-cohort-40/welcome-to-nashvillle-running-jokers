function sendToServer(json, url){
    console.log("Sending to server");
    var request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader("Content-Type", "application/json");
    // request.onload = onload;
    request.send(JSON.stringify(json));
  }

  sendToServer(
      {
          id: 3,
          park: " Horton",
          art: "Center",
          restaurant: " B's"
      },
      "http://localhost:8088/itinerary"
  )