function sendToServer(json, url){
    console.log("Deleting from server");
    deleteFromServer(url)
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
//   sendToServer(
//       {
//           id: 1,
//           park: "Henry Horton",
//           art: "Frist Center",
//           restaurant: "Hattie B's"
//       },
//       "http://localhost:8088/itinerary"
//   )