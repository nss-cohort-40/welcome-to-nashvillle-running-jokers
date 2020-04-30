// Function to fetch the OpenTable API and render it using outputResultsToDOM() function
const fetchRestaurant = (uInput) => {
    fetch("https:/opentable.herokuapp.com/api/restaurants?city=Nashville")
        .then(response => response.json())
        .then(data => {
            let restaurants = data.restaurants;

            // Create a array of objects with the 3 first restaurants found in *restaurants*
            let arrayRestaurants = [];

            // Add what will come to be the las two elements of the array to make integration with the DOMHandler.js
            arrayRestaurants.push("Restaurants")
            arrayRestaurants.push("foodOutput")

            // Look for the input in the name of the restaurants
            for (let i = 0; i < restaurants.length; i++) {
                if (restaurants[i].name.toLowerCase().includes(uInput.toLowerCase())) {
                    let rr = {};
                    rr.name = restaurants[i].name;
                    rr.address = restaurants[i].address;
                    arrayRestaurants.unshift(rr);
                }
                // Garantee the Array will have up to 3 restaurants
                if (arrayRestaurants.length === 5) {
                    break;
                }

            }

            // Calling outputResultsToDOM() to render the on the HTML
            outputResultsToDOM(arrayRestaurants);
        }
        )
}

// Captures the click event in the Restaurant Search onto browser and offer the value in the input as parameter to fetchRestaurant()
document.getElementById("foodButton").addEventListener("click", () => {
    let foodInput = document.getElementById("foodInput").value;
    fetchRestaurant(foodInput);
})