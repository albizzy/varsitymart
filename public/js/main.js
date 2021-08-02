const addPhoneNav = document.querySelector('.add-phone-nav');

const openPhoneNav = document.querySelector('.open-nav');

const closePhoneNav = document.querySelector('.close-nav');

openPhoneNav.addEventListener('click', () => {
    addPhoneNav.classList.add('phone-nav-show');
});

closePhoneNav.addEventListener('click', () => {
    addPhoneNav.classList.remove('phone-nav-show');
})