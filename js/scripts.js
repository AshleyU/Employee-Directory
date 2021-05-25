const gallery = document.querySelector('.gallery'); 

//Fetch function gets data from API

fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => generateProfile(data.results))

//Function that loops through the data from the API and inserts it into employee profiles

function generateProfile(data) {
    for(let i = 0; i < data.length; i++) {
        let profileHTML = `
        <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${data[i].picture.medium}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${data[i].name.first} ${data[i].name.last}</h3>
                <p class="card-text">${data[i].email}</p>
                <p class="card-text cap">${data[i].location.city}</p>
            </div>
        </div>
        `;
        gallery.insertAdjacentHTML("beforeend", profileHTML);
    }
}