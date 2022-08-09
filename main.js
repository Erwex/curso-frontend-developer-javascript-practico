const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');



menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)




function toggleDesktopMenu() {
    const isAsideOpen = !aside.classList.contains('inactive')
    
    if (isAsideOpen) {
        aside.classList.add('inactive')
    }

DesktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideOpen = !aside.classList.contains('inactive')
    
    if (isAsideOpen) {
        aside.classList.add('inactive')
    }
mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const ismobileMenuOpen = !mobileMenu.classList.contains('inactive')
    

    if (ismobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');     

}