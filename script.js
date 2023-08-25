'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const section1 = document.querySelector('#section--1');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

btnScrollTo.addEventListener('click', function (e) {
    section1.scrollIntoView({ behavior: 'smooth' });
});

// Select the parent element
document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

const h1 = document.querySelector('h1');

// Downwards the parent
console.log(h1.querySelectorAll('.highlight')); // Children with specific class
console.log(h1.childNodes); // All children including whitespace
console.log(h1.children); // Only direct children
h1.firstElementChild.style.color = 'white'; // First child element
h1.lastElementChild.style.color = 'white'; // Last child element

// Upwards the parent
console.log(h1.parentNode); // Parent node object if present
console.log(h1.parentElement); // Element object representing parent element
console.log(h1.closest('.header')); // Closest specific element

// Siblings
console.log(h1.previousElementSibling); // Previous sibling element
console.log(h1.nextElementSibling); // Next sibling element
console.log(h1.previousSibling); // Previous sibling node
console.log(h1.nextSibling); // Next sibling node
console.log(h1.parentElement.children); // All children of parent element
