document.addEventListener("DOMContentLoaded", function () {
  // Get the container
  var container = document.getElementById("conclusion");

  // Get the button
  var addButton = document.getElementById("message");

  // Add click event listener to the button
  addButton.addEventListener("click", function () {
    // Create a new element
    var newElement = document.createElement("div");
    newElement.textContent = "New Element";

    // Add some styles to the new element (optional)
    newElement.style.border = "1px solid black";
    newElement.style.padding = "10px";
    newElement.style.marginTop = "10px";

    // Append the new element to the container
    container.appendChild(newElement);
  });
});
