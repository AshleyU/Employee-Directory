// Create a request variable and assign a new XMLHttpRequest object to it
const request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://randomuser.me/api/', true);

request.onload = function () {
  // Begin accessing JSON data
}

// Send request
request.send();