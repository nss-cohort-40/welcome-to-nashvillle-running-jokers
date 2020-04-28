function outputResultsToDOM(arr) {
    outputElement = document.getElementById("resultsOutput");
    saveElement = document.getElementById(arr[4]);
    outputElement.innerHTML = ""
    let h2 = document.createElement("h2")
    h2.innerHTML = `${arr[3]} Results`
    outputElement.appendChild(h2)
    let ol = document.createElement("ol")

    for (let i = 0; i < 3; i++){
        let li = document.createElement("li")
        li.innerHTML = arr[i].name + " " + arr[i].address + " "
        let button = document.createElement("button")
        button.innerHTML = "Save"
        button.id = `${arr[3]}${i}`
        button.addEventListener("click", () => {
                saveElement.innerHTML = "";
                li.removeChild(button)
                li.innerHTML = `${arr[3]}: ${li.innerHTML}`
                saveElement.appendChild(li)
            })
        li.appendChild(button)
        ol.appendChild(li)
    }
    outputElement.appendChild(ol)
}

let objArr = [
    {
        name: "John's Park",
        address: "2215 Oakbranch Circle"
    },
    {
        name: "John's Park",
        address: "2215 Oakbranch "
    },
    {
        name: "John's Park",
        address: "2215 Circle"
    },
    "Park",
    "parksOutput"
]
outputResultsToDOM(objArr)