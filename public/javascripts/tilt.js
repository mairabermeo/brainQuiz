// Author: Maira Bermeo
const images = document.querySelectorAll('.characters img');
let tiltDirection = -5; 
let tiltDegree = 25; 

function tiltImages() {
    images.forEach((image, index) => {
        let angle = (Math.sin(Date.now() / 500 + index) * tiltDegree);
        image.style.transform = `rotate(${angle}deg)`; 
    });
}

setInterval(tiltImages, 50);
