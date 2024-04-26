function toggleMenu() {
    document.getElementById('nav-icon').classList.toggle('active');
}

const icon = document.getElementById('head-logo');
const adImage = document.getElementById('ad-img');

function toggleDark() {
    document.querySelector('body').classList.toggle('darkTheme');
    localStorage.setItem("darkMode", 'on');

    if (document.body.classList.contains('darkTheme')) {
        icon.src = "assets/images/dark-logo.png";
        adImage.src = "assets/images/dark-ads-space.png";
    }
    else {
        icon.src = "assets/images/Logo.png";
        adImage.src = "assets/images/ads-space.png";
        localStorage.setItem("darkMode", "");
    }
}

if (localStorage.getItem('darkMode') === "on") {
    document.querySelector('body').classList.add("darkTheme");
    icon.src = "assets/images/dark-logo.png";
    adImage.src = "assets/images/dark-ads-space.png";
} else {
    icon.src = "assets/images/Logo.png";
    adImage.src = "assets/images/ads-space.png";
    localStorage.setItem("darkMode", "");
}

const cards = document.querySelectorAll(".post-card");
// function handleCardOne() {
//     document.getElementById('card-container').style.gridTemplateColumns = ("repeat(1, 1fr)");
//     for (const card of cards) {
//         card.style.display = "flex";
//         card.style.gap = "20px";
//     }
// };

function handleCardTwo() {
    document.getElementById('card-container').style.gridTemplateColumns = ("repeat(2, 1fr)");
    for (const card of cards) {
        card.style.flexDirection = "column";
    }
}

function handleCardThree() {
    document.getElementById('card-container').style.gridTemplateColumns = ("repeat(3, 1fr)");
    for (const card of cards) {
        card.style.flexDirection = "column";
    }
}

function handleCardOne() {
    document.getElementById('card-container').style.gridTemplateColumns = ("repeat(1, 1fr)");
    for (const card of cards) {
        card.style.display = "flex";
        card.style.flexDirection = "row";
        card.style.gap = "20px";
    }
};