//Author: Maira Bermeo

document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".title h1");
    const text = title.innerText;
    title.innerHTML = ""; 

    text.split("").forEach((letter, index) => {
        let span = document.createElement("span");
        span.innerText = letter;
        span.style.display = "inline-block";
        title.appendChild(span);
    });

    function animateWave() {
        const letters = document.querySelectorAll(".title h1 span"); 

        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.transform = "translateY(-10px)";
                setTimeout(() => {
                    letter.style.transform = "translateY(0px)";
                }, 300);
            }, index * 100); 
        });
    }
    setInterval(animateWave, 1500);
});
