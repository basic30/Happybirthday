window.addEventListener("load", () => {
    // Elements
    const firstSlide = document.querySelector(".first-slide");
    const secondSlide = document.querySelector(".second-slide");
    const thirdSlide = document.querySelector(".third-slide");
    const birthdayMusic = document.getElementById("birthday-music");

    // Play music function with autoplay fallback
    const playMusic = () => {
        birthdayMusic.play().catch(() => {
            console.log("Autoplay blocked. Attempting user interaction...");
            alert("Click anywhere to start the music!");
            document.body.addEventListener("click", () => {
                birthdayMusic.play();
            });
        });
    };

    // Hide the first slide and show the second slide
    setTimeout(() => {
        firstSlide.style.display = "none";
        secondSlide.style.opacity = "1";
        secondSlide.style.zIndex = "2";
    }, 2500);

    // Hide the second slide and show the third slide with music
    setTimeout(() => {
        secondSlide.style.display = "none";
        thirdSlide.style.opacity = "1";
        thirdSlide.style.zIndex = "3";
        playMusic(); // Attempt to play the music
    }, 5000);
});