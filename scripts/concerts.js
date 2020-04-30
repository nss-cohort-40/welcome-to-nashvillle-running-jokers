document.querySelector("#musicButton").addEventListener("click", () => {
  let musicSearch = document.querySelector("#musicInput").value;
  fetchMusicEntry(musicSearch);
});
