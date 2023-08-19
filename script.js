let bakeryData = JSON.parse(localStorage.getItem('bakeryData')) || {};


let currentBakeryName = localStorage.getItem('currentBakeryName') || 'My Bakery';

const bakeryNameElement = document.getElementById('bakeryName');
const cookieElement = document.getElementById('cookie');
const cookieCountElement = document.getElementById('cookieCount');
const changeNameBtn = document.getElementById('changeNameBtn');


function updateUI() {
    bakeryNameElement.textContent = currentBakeryName;
    const bakery = bakeryData[currentBakeryName] || { cookieCount: 0 };
    cookieCountElement.textContent = `${bakery.cookieCount} Cookies`;
}
updateUI();
cookieElement.addEventListener('click', () => {
    bakeryData[currentBakeryName] = bakeryData[currentBakeryName] || { cookieCount: 0 };
    bakeryData[currentBakeryName].cookieCount++;
    localStorage.setItem('bakeryData', JSON.stringify(bakeryData));
    updateUI();
});

// Change bakery name
changeNameBtn.addEventListener('click', () => {
    const newName = prompt('Enter a new name for your bakery:');
    if (newName) {
        currentBakeryName = newName;
        localStorage.setItem('currentBakeryName', newName);
        updateUI();
    }
});


const seeAllBakeriesBtn = document.getElementById('seeAllBakeriesBtn');
const allBakeriesContainer = document.getElementById('allBakeries');
const bakeryList = document.getElementById('bakeryList');

// Function to display all bakeries
function displayAllBakeries() {
    bakeryList.innerHTML = ''; 

    for (const bakeryName in bakeryData) {
        const bakery = bakeryData[bakeryName];
        const listItem = document.createElement('li');
        listItem.textContent = `${bakeryName}: ${bakery.cookieCount} Cookies`;
        bakeryList.appendChild(listItem);
    }

    allBakeriesContainer.classList.remove('hidden');
}
