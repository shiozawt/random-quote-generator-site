
let contentDiv = document.getElementById("quote-API");

let button = document.getElementById("get-advice-button");

button.addEventListener("mouseup", function(event) {

  event.preventDefault();

  let url = "https://api.adviceslip.com/advice";

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {

      console.log(json);
      console.log(json.slip.advice);

      contentDiv.innerHTML = json.slip.advice;

    });
});
