function toggleMenu() {
    document.getElementById('nav-icon').classList.toggle('active');
}

function toggleDark() {
    const icon = document.getElementById('head-logo')
    document.querySelector('body').classList.toggle('darkTheme');
    if (document.body.classList.contains('darkTheme')) {
        icon.src = "assets/images/dark-logo.png"
    }
    else {
        icon.src = "assets/images/Logo.png"
    }
} 