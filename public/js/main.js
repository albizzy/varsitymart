// Opens up the navigation in small devices
const addPhoneNav = document.querySelector('.add-phone-nav');

const openPhoneNav = document.querySelector('.open-nav');

const closePhoneNav = document.querySelector('.close-nav');

openPhoneNav.addEventListener('click', () => {
    addPhoneNav.classList.add('phone-nav-show');
});

closePhoneNav.addEventListener('click', () => {
    addPhoneNav.classList.remove('phone-nav-show');
})

const addLoginModal = document.querySelector('.add-login-modal');
const openLoginModal = document.querySelector('.open-login-modal');

openLoginModal.addEventListener('click', () => {
    addLoginModal.classList.add('login-modal-show');
})

window.addEventListener('click', e => {
    if (e.target === addLoginModal) {
        addLoginModal.classList.remove('login-modal-show')
    }
})