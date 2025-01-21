const menu = document.querySelector("#mobile-menu")
const menuList = document.querySelector(".navbar__menu")

const mobilemenu = () => {
    menu.classList.toggle('is-active')
    menuList.classList.toggle('active')
}

menu.addEventListener('click', mobilemenu)

const coloring = () => {
    const ele = document.querySelector('.highlight');
    const home = document.querySelector('#home-page');
    const about = document.querySelector('#about-page');
    const services = document.querySelector('#services-page');
    const signup = document.querySelector('#signup');
    let scrollpos = window.scrollY;
    if (window.innerWidth > 960 && scrollpos < 700) {
        home.style.cssText = 'border-bottom: 3px solid #6dc6ee'
        about.style.cssText = 'border-bottom: none'
    }
    else if (window.innerWidth > 960 && scrollpos < 1600) {
        home.style.cssText = 'border-bottom: none'
        services.style.cssText = 'border-bottom: none'
        about.style.cssText = 'border-bottom: 3px solid #6dc6ee'
    }
    else if (window.innerWidth > 960 && scrollpos < 2400) {
        home.style.cssText = 'border-bottom: none'
        about.style.cssText = 'border-bottom: none'
        services.style.cssText = 'border-bottom: 3px solid #6dc6ee'
        signup.style.cssText = 'border-bottom: none'
    }
    else if (window.innerWidth > 960 && scrollpos > 2400) {
        home.style.cssText = 'border-bottom: none'
        about.style.cssText = 'border-bottom: none'
        services.style.cssText = 'border-bottom: none'
        signup.style.cssText = 'border-bottom: 3px solid #6dc6ee'
    }
    console.log(scrollpos)
}
window.addEventListener('scroll', coloring)