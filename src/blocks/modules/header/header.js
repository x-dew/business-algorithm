var menu = document.getElementById('menu');
var menu__link =document.getElementById('nav-menu__link')

if (menu)
    menu.addEventListener('click',function(){
        if(menu__link.classList.contains('nav-menu__active'))
            menu__link.classList.remove('nav-menu__active')
        else
            menu__link.classList.add('nav-menu__active')
    })