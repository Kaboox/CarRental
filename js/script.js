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
const formCount = document.querySelector('.form-count');

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let imgCounter = 0;
const img1 = {
    "path": "img/furymale/m2front.jpg",
    "name": "BMW M2 Competition"
}
const img2 = {
    "path": "img/furymale/m2back.jpg",
    "name": "BMW M2 Competition"
}
const img3 = {
    "path": "img/furymale/m4front.jpg",
    "name": "BMW M4 Competition"
}
const img4 = {
    "path": "img/furymale/m4back.jpg",
    "name": "BMW M4 Competition"
}
const img5 = {
    "path": "img/furymale/a35front.jpg",
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

const fetchFormCount = () => {
    fetch('count_forms.php')
        .then(response => response.text())
        .then(data => {
            formCount.textContent = data.trim();
        })
        .catch(error => console.error('Error fetching form count:', error));
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

const clearForm = () => {
    nameInput.value = '';
    emailInput.value = '';
    textArea.value = '';
}

const sendForm = (event) => {
    event.preventDefault();
    let isValid = true;

    // Validation for name input
    if (nameInput.value.trim() === "") {
        nameInput.classList.add('input-error');
        isValid = false;
    } else {
        nameInput.classList.remove('input-error');
    }

    // Validation for email input
    if (emailInput.value.trim() === "" || !emailInput.value.toLowerCase().match(re)) {
        emailInput.classList.add('input-error');
        isValid = false;
    } else {
        emailInput.classList.remove('input-error');
    }

    // Validation for message input
    if (textArea.value.trim() === "") {
        textArea.classList.add('input-error');
        isValid = false;
    } else {
        textArea.classList.remove('input-error');
    }

    // If all inputs are valid, send the form
    if (isValid) {
        const formData = new FormData();
        formData.append('contactName', nameInput.value.trim());
        formData.append('contactEmail', emailInput.value.trim());
        formData.append('contactMsg', textArea.value.trim());

        // Send form data to PHP script
        fetch('connect.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            console.log(data); // Log success message
            clearForm();
            fetchFormCount();
        })
        .catch(error => {
            console.error('Error:', error); // Log error message
        });
    }
}

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);
priceBtn.addEventListener('click', countPayment);
sendFormBtn.addEventListener('click', sendForm);
document.addEventListener('DOMContentLoaded', () => {
    galleryImg.setAttribute('src', imgArray[imgCounter].path);
    carName.textContent = imgArray[imgCounter].name;
    fetchFormCount();
})

setInterval(updateDateTime, 1000);