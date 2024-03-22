const galleryImg = document.querySelector(".gallery-img");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let imgCounter = 1;
const img1 = {
    "path": "../img/furymale/m2top.jpg",
    "name": ""
}
const img2 = {
    "path": "../img/furymale/m4top.jpg",
    "name": ""
}
const img3 = {
    "path": "../img/furymale/a35top.jpg",
    "name": ""
}
const img4 = {
    "path": "../img/furymale/A7402270-min.jpg",
    "name": ""
}
const img5 = {
    "path": "../img/furymale/m2top.jpg",
    "name": ""
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
    imgCounter %= 5;
    galleryImg.setAttribute('src', imgArray[imgCounter].path)
}

const moveRight = (event) => {
    imgCounter++;
    imgCounter %= 5;
    galleryImg.setAttribute('src', imgArray[imgCounter].path)
}

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);