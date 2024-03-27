const burgerBtn = document.querySelector('.burger');
const closeMenuBtn = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');
const galleryImg = document.querySelector(".gallery-img");
const carName = document.querySelector(".car-name");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const paymentAmount = document.querySelector('.payment-amount');
const priceBtn = document.querySelector('.price-btn');
const selectedCar = document.getElementById("car");
const daysAmount = document.getElementById("days");
const selectedKmAmount = document.getElementById("km");
const allMenuLinks = document.querySelectorAll(".menu-link")

let imgCounter = 0;
const img1 = {
    "path": "../img/furymale/m2front.jpg",
    "name": "BMW M2 Competition"
}
const img2 = {
    "path": "../img/furymale/m2back.jpg",
    "name": "BMW M2 Competition"
}
const img3 = {
    "path": "../img/furymale/m4front.jpg",
    "name": "BMW M4 Competition"
}
const img4 = {
    "path": "../img/furymale/m4back.jpg",
    "name": "BMW M4 Competition"
}
const img5 = {
    "path": "../img/furymale/a35front.jpg",
    "name": "Mercedes A35 AMG"
}
const imgArray = [
    img1,
    img2,
    img3,
    img4,
    img5
]

const moveLeft = (event) => {
    imgCounter--;
    if (imgCounter < 0) {
        imgCounter = imgArray.length - 1;
    }
    galleryImg.setAttribute('src', imgArray[imgCounter].path);
    carName.textContent = imgArray[imgCounter].name;
}

const moveRight = (event) => {
    imgCounter++;
    if (imgCounter === imgArray.length) {
        imgCounter = 0;
    }
    galleryImg.setAttribute('src', imgArray[imgCounter].path)
    carName.textContent = imgArray[imgCounter].name;
}

const countPayment = (event) => {
    let amount = 0;
    event.preventDefault();
    if(selectedCar.value == 1) {
        amount = 600;
        
    } else if(selectedCar.value == 2) {
        amount = 700;
    } else {
        amount = 400;
    }
    amount += (daysAmount.value * 400);
    amount += (selectedKmAmount.value * 150);
    paymentAmount.textContent = amount.toString();
}

burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('menu-active')
    body.style.overflowY = 'hidden';
})

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-active')
    body.style.overflowY = 'auto'
})

allMenuLinks.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('menu-active')
        body.style.overflowY = 'auto'
    })
})

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);
priceBtn.addEventListener('click', countPayment);
document.addEventListener('DOMContentLoaded', () => {
    galleryImg.setAttribute('src', imgArray[imgCounter].path);
    carName.textContent = imgArray[imgCounter].name;
})