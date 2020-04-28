// dependecies: fetchingData.js,

document.querySelector("#parksButton").addEventListener("click", () => {
  let parkObj = {}; //or array?
  // let parkAddy = document.querySelector("#parkAddy");
  // let parkName = document.querySelector("#parkName");
  document.querySelector("#parksInput").value += parkObj;
  fetchParkEntry(parkParams);
});

// const parkResults = document.querySelector("#parksOutput");
