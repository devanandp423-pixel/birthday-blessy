
// ===========================
// HEART PARTICLES
// ===========================

const heartContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.bottom = "120px";

    heart.style.fontSize =
        Math.random() * 20 + 16 + "px";

    heart.style.animationDuration =
        Math.random() * 4 + 5 + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 700);

// ===========================
// BUTTONS
// ===========================

const leaveBtn =
    document.getElementById("leaveBtn");

const openBtn =
    document.getElementById("openBtn");

const hero =
    document.querySelector(".hero");

const goodbye =
    document.getElementById("goodbye");

if (leaveBtn) {

    leaveBtn.addEventListener("click", () => {

        hero.style.display = "none";

        goodbye.classList.remove("hidden");

    });

}

if (openBtn) {

    openBtn.addEventListener("click", () => {

        document.body.style.opacity = "0";

        setTimeout(() => {

            window.location.href = "wishes.html";

        }, 700);

    });

}

// ===========================
// PAGE FADE IN
// ===========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});