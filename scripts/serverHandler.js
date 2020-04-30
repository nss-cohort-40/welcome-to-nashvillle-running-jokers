function sendToServer(json, url){
    console.log("Deleting from server");
    try {
        deleteFromServer(url)
    } catch(err){}
    setTimeout(function() {
        console.log("Sending to server")
        postToServer(json, url)
    }, 2000) 
    
}

function deleteFromServer(url){
    fetch(`${url}/1`, {
    method: 'DELETE'
    })
}

function postToServer(json, url){
    var request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader("Content-Type", "application/json");
    // request.onload = onload;
    request.send(JSON.stringify(json));
}

function clearItinerary() {
    sendToServer({
        id: 1,
        park: "",
        art: "",
        food: "",
        music: ""
      },
      "http://localhost:8088/itinerary")
      setTimeout(function() {
        console.log("Sending to server")
        fetchItinerary();
    }, 4000) 
}