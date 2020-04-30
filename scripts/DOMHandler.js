function outputResultsToDOM(arr) {
  outputElement = document.getElementById("resultsOutput");
  saveElement = document.getElementById(arr[arr.length - 1]);
  outputElement.innerHTML = "";
  let h2 = document.createElement("h2");
  h2.innerHTML = `${arr[arr.length - 2]} Results`;
  outputElement.appendChild(h2);
  let ol = document.createElement("ol");
  if (typeof arr[0] === "object") {
    for (let i = 0; i < arr.length - 2; i++) {
      let li = document.createElement("li");
      li.innerHTML = arr[i].name + ", " + arr[i].address + " ";
      if (arr[arr.length - 2] === "Art") {
        let a = document.createElement("a");
        a.innerHTML = "More info";
        a.href = arr[i].url;
        a.setAttribute("target", "_blank");
        li.appendChild(a);
      }
      let button = document.createElement("button");
      button.innerHTML = "Save";
      button.id = `${arr[arr.length - 2]}${i}`;
      button.addEventListener("click", () => {
        saveElement.innerHTML = "";
        li.removeChild(button);
        li.innerHTML = `${arr[arr.length - 2]}: ${li.innerHTML}`;
        saveElement.appendChild(li);
        let saveObject = {
          id: 1,
          park: document.getElementById("parksOutput").innerHTML,
          art: document.getElementById("artOutput").innerHTML,
          food: document.getElementById("foodOutput").innerHTML,
          music: document.getElementById("musicOutput").innerHTML
        }
        sendToServer(saveObject, "http://localhost:8088/itinerary")

      });
      li.appendChild(button);
      ol.appendChild(li);
    }
  } else {
    let h4 = document.createElement("h4");
    h4.innerHTML = "No Results Found";
    outputElement.appendChild(h4);
  }
  outputElement.appendChild(ol);
}
