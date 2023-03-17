import "./style.css";

document.getElementById('nav-toggle').addEventListener('click', function() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('hidden');
  });