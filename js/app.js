// Tu código aquí

document.querySelector('#btn').addEventListener('click', function () {
    getRandomPerson();
});
 
let intervalID;


async function getRandomPerson() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();

    document.querySelector('#first').innerHTML = data.results[0].name.first;
    document.querySelector('#last').innerHTML = data.results[0].name.last;
    document.querySelector('#country').innerHTML = data.results[0].location.country;
    document.querySelector('#phone').innerHTML = data.results[0].phone;
    document.querySelector('#email').innerHTML = data.results[0].email;
    document.querySelector('#photo').src = data.results[0].picture.medium;


    console.log(data);
};

function startInterval() {
    intervalID = setInterval(getRandomPerson, 5000);
    document.querySelector('#btn').disabled = true;
};

window.addEventListener('load', startInterval);

function addNewContact(name, phone) {
    const table = document.querySelector('.table tbody');
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const phoneCell = document.createElement('td');

    nameCell.textContent = name;
    phoneCell.textContent = phone;

    row.appendChild(nameCell);
    row.appendChild(phoneCell);

    table.appendChild(row);
};

document.querySelector('#btnInterview').addEventListener('click', function() {
    const name = document.querySelector('#first').textContent + ' ' + document.querySelector('#last').textContent;
    const phone = document.querySelector('#phone').textContent;
    addNewContact(name, phone);
});