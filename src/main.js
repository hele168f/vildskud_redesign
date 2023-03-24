import "./style.css";

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

// Cookie boks
let menu = document.getElementById("menu");
const showMenu = (flag) => {
  menu.classList.toggle("hidden");
};


const cookieConsent = document.querySelector('#cookie-consent');
  const cookieAcceptButton = document.querySelector('#cookie-accept');
  const cookieDenyButton = document.querySelector('#cookie-deny');

  cookieAcceptButton.addEventListener('click', () => {
    cookieConsent.remove();
  });

  cookieDenyButton.addEventListener('click', () => {
    cookieConsent.remove();
  });



  //knapper til billetsiden

