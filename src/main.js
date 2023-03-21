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
const cookieBox = document.querySelector('.cookie-box');
const acceptAllBtn = document.querySelector('#accept-all-btn');
const rejectAllBtn = document.querySelector('#reject-all-btn');
const readMoreLink = document.querySelector('#read-more-link');

// Function to hide the cookie box
const hideCookieBox = () => {
  cookieBox.style.display = 'none';
}

// Function to handle the accept all button click
const handleAcceptAll = () => {
  // TODO: Set all cookies to accepted
  hideCookieBox();
}

// Function to handle the reject all button click
const handleRejectAll = () => {
  // TODO: Set all cookies to rejected
  hideCookieBox();
}

// Function to handle the read more link click
const handleReadMore = (e) => {
  e.preventDefault();
  // TODO: Show more information about cookies
}

// Add event listeners to the buttons and link
acceptAllBtn.addEventListener('click', handleAcceptAll);
rejectAllBtn.addEventListener('click', handleRejectAll);
readMoreLink.addEventListener('click', handleReadMore);