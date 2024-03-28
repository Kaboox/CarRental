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
const nameInput = document.querySelector('.contact-name');
const emailInput = document.querySelector('.contact-email');
const textArea = document.querySelector('.contact-text');
const sendFormBtn = document.querySelector('.contact-btn');
const allMenuLinks = document.querySelectorAll(".menu-link");
const dateText = document.querySelector('.date');
const timeText = document.querySelector('.time');

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

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


const updateDateTime = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const locale = 'pl-PL';
    const dateTimeString = new Date().toLocaleString(locale, options);
    timeText.textContent = dateTimeString;
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

const sendForm = (event) => {
    event.preventDefault();
    if (nameInput.value.length == 0) {
        nameInput.classList.add('input-error');
    } else {
        nameInput.classList.remove('input-error');
    }
    
    if (emailInput.value.length == 0) {
        emailInput.classList.add('input-error');
    } else if (!emailInput.value.toLowerCase().match(re)) {
        emailInput.classList.add('input-error');
    } else {
        emailInput.classList.remove('input-error');
    }

    if (textArea.value.length == 0) {
        textArea.classList.add('input-error');
    } else {
        textArea.classList.remove('input-error');
    }
}

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);
priceBtn.addEventListener('click', countPayment);
sendFormBtn.addEventListener('click', sendForm);
document.addEventListener('DOMContentLoaded', () => {
    galleryImg.setAttribute('src', imgArray[imgCounter].path);
    carName.textContent = imgArray[imgCounter].name;
})

setInterval(updateDateTime, 1000);