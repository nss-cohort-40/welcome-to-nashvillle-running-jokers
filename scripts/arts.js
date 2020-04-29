document.getElementById("artButton").addEventListener("click", () => {
    let artName = document.getElementById("artInput").value;
    fetchArtEntry(artName);
})