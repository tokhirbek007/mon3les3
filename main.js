let body = document.querySelector('body')
let exit = document.querySelector('.exit')
let menu = document.querySelector('.menu-button')
let navlist = document.querySelector('header nav ul')


exit.addEventListener('click', function () {
    navlist.style.display = "none";
});

menu.addEventListener('click', function () {
    navlist.style.display = "flex";
});
