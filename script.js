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
