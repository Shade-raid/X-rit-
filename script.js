if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      const { latitude, longitude } = position.coords;
      document.querySelector("#status").textContent = "Location found!";
      document.querySelector("#location").textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
    },
    function() {
      document.querySelector("#status").textContent = "Location not found.";
    }
  );
} else {
  document.querySelector("#status").textContent = "Geolocation not available.";
}

const form = document.querySelector("form");
const dogPicture = document.querySelector("#dog-picture");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const location = document.querySelector("#location").textContent;
  const picture = dogPicture.files[0];
  // Add the location and picture information to a database or storage service.
});
