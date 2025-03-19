document.querySelector(".face1").addEventListener("click", addFaceOne);
document.querySelector(".face2").addEventListener("click", addFaceTwo);
document.querySelector(".face3").addEventListener("click", addFaceThree);
document.querySelector(".eyebrows1").addEventListener("click", addEyeBrowsOne);
document.querySelector(".eyebrows2").addEventListener("click", addEyeBrowsTwo);
document.querySelector(".eyebrows3").addEventListener("click", addEyeBrowsThree);
document.querySelector(".eye1").addEventListener('click',addEyeOne);
document.querySelector(".eye2").addEventListener('click',addEyeTwo);
document.querySelector(".eye3").addEventListener('click',addEyeThree);
document.querySelector(".nose1").addEventListener('click', addNoseOne);
document.querySelector(".nose2").addEventListener('click', addNoseTwo);
document.querySelector(".nose3").addEventListener('click', addNoseThree);
document.querySelector(".mouth1").addEventListener('click', addMouthOne);
document.querySelector(".mouth2").addEventListener('click', addMouthTwo);
document.querySelector(".mouth3").addEventListener('click', addMouthThree);

function updateBackground() {
    const placeToShow = document.querySelector(".placeToShow");
    const hasFace = placeToShow.querySelector(".face1, .face2, .face3");
    const hasEyebrows = placeToShow.querySelector(".eyebrows1, .eyebrows2, .eyebrows3");
    const hasEyes = placeToShow.querySelector(".eye1, .eye2, .eye3");
    const hasNose = placeToShow.querySelector(".nose1, .nose2, .nose3");
    const hasMouth = placeToShow.querySelector(".mouth1, .mouth2, .mouth3");

    const background = ["images/back1.jpg","images/back2.jpg","images/back3.jpg","images/back4.jpg"];



    if (hasFace && hasEyebrows && hasEyes && hasNose && hasMouth) {
        const backIndex = Math.floor(Math.random() * background.length);
        console.log('change color')

        document.querySelector("main").style.backgroundImage = `url('${background[backIndex]}')`; // Change to desired color
    } else {
        placeToShow.style.backgroundImage = ""; // Revert to default
    }
}

function addPart(className, imagePath) {
    const placeToShow = document.querySelector(".placeToShow");
    const existingPart = placeToShow.querySelector(className);

    if (existingPart) {
        existingPart.remove();
    } else {
        const imgTag = `<img class="${className.replace('.', '')}" src="${imagePath}"/>`;
        placeToShow.innerHTML += imgTag;
    }

    updateBackground();
}

function addFaceOne() { addPart(".face1", "images/face-1-removebg-preview.png"); }
function addFaceTwo() { addPart(".face2", "images/face-6-removebg-preview.png"); }
function addFaceThree() { addPart(".face3", "images/face-3-removebg-preview.png"); }

function addEyeBrowsOne() { addPart(".eyebrows1", "images/eyebrows-1-removebg-preview.png"); }
function addEyeBrowsTwo() { addPart(".eyebrows2", "images/eyebrows-2-removebg-preview.png"); }
function addEyeBrowsThree() { addPart(".eyebrows3", "images/eyebrows-3-removebg-preview.png"); }

function addEyeOne() { addPart(".eye1", "images/eyes-1-removebg-preview.png"); }
function addEyeTwo() { addPart(".eye2", "images/eyes-2-removebg-preview.png"); }
function addEyeThree() { addPart(".eye3", "images/eyes-3-removebg-preview.png"); }

function addNoseOne() { addPart(".nose1", "images/nose-1-removebg-preview.png"); }
function addNoseTwo() { addPart(".nose2", "images/nose-2-removebg-preview.png"); }
function addNoseThree() { addPart(".nose3", "images/nose-3-removebg-preview.png"); }

function addMouthOne() { addPart(".mouth1", "images/mouth-1-removebg-preview.png"); }
function addMouthTwo() { addPart(".mouth2", "images/mouth-2-removebg-preview.png"); }
function addMouthThree() { addPart(".mouth3", "images/mouth-3-removebg-preview.png"); }
