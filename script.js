'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
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

// for (
//   let i = 0;
//   i < btnsOpenModal.length;
//   i++ // here we are using for loop to run all elements named btn--show-modal
// )
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal)); //// here we are using for loop to run all elements named btn--show-modal

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
}); // this btn 'keyword' listener helps us to remove model with "escape" key and !modal.classList.contains('hidden') is here to check if there is any hidden class available or not if yes closeModal() func runs
//
// selecting elementss
const header = document.querySelector('.header');
const allSelections = document.querySelectorAll('.section');
console.log(allSelections);
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // <button> <- this is called tag
document.getElementsByClassName('btn');
// creating elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for better functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>';
//placing the div .
// header.prepend(message);
header.append(message);
// header.after(message);
// header.before(message);
//delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
