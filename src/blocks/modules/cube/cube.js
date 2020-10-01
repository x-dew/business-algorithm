var menu_link = document.getElementsByClassName('cube-link');
var menu__cube = document.querySelector('.cube-menu__link');

if (menu_link)
    for (let i = 0; i < menu_link.length; i++) {
        menu_link[0].addEventListener('click', function () {
            if(menu__cube[0].classList.contains('cube-menu__active'))
                menu__cube[0].classList.remove('cube-menu__active')
            else
                menu__cube[0].classList.add('cube-menu__active')
        })
    }