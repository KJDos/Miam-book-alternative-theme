//change color nav
window.onscroll = () => {
    const nav = document.querySelector('.nav');

    if (this.scrollY <= 550) {
        nav.classList.add('nav-transparent');
    } else {
        nav.classList.remove('nav-transparent');
    }
};
