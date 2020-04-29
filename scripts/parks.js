document.querySelector("#parksButton").addEventListener("click", () => {
  let parkSearch = document.querySelector("#parksInput").value;
  fetchParkEntry(parkSearch);
});
