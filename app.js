//alert-danger
if (document.querySelector('.icon-alert')) {
    const iconAlert = document.querySelector('.icon-alert');
    iconAlert.addEventListener("click", function () {
        document.querySelector('.alert').classList.toggle('d-none')
    });
}


//responsive nav
const iconMobile = document.querySelector('#icon-mobile');

iconMobile.addEventListener("click", function () {
    document.querySelector('.nav-responsive').classList.toggle('nav-responsive-active')
});
