document.getElementById("foodButton").addEventListener("click", () => {
  let foodInput = document.getElementById("foodInput").value;
  fetchRestaurant(foodInput);
});
