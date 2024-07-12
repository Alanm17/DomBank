'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const scrollDown = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
//
// adding an event listner to Learn More button
scrollDown.addEventListener('click', function (e) {
  const coordsS1 = section1.getBoundingClientRect();
  console.log(coordsS1);
  console.log(e.target.getBoundingClientRect()); // updated version of pageX/YOffset is scrollY/X
  console.log('this is the data of X', window.scrollY, window.scrollX); //The window.pageXOffset property returns the number of pixels that the document has been horizontally scrolled from the left edge. Similarly, window.pageYOffset returns the number of pixels that the document has been vertically scrolled from the top edge.
  console.log(document.documentElement.clientHeight); // bu ekran klentga qancha darajada ochiqligini px lda korsatadi
  // window.scrollTo(
  //   window.scrollX + coordsS1.left,
  //   coordsS1.top + window.scrollY
  // );
  // window.scrollTo({
  //   left: coordsS1.left + window.scrollX,
  //   top: coordsS1.top + window.scrollY,
  //   behavior: 'smooth',
  // }); // we made function and object inside and specified each property and added behavior to our scroll function
  section1.scrollIntoView({ behavior: 'smooth' });
});
// so in order to make this function we needed first section1.getBoundingClientRect() to get coordinates/pixels of each sides and after window.scrollTo() function to use scroll window.scrollX + coordsS1.left, coordsS1.top + window.scrollY  scrollY/X
// vertical means '|' and horizontal '__'

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
// // selecting elementss
// const header = document.querySelector('.header');
// const allSelections = document.querySelectorAll('.section');
// console.log(allSelections);
// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button'); // <button> <- this is called tag
// document.getElementsByClassName('btn');
// // creating elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'We use cookies for better functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>';
// //placing the div .
// // header.prepend(message);
// header.append(message);
// // header.after(message);
// // header.before(message);
// //delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// /// classlist Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// console.log(message.style.backgroundColor);
// console.log(message.style.width);
// console.log(getComputedStyle(message).backgroundColor);
// console.log(getComputedStyle(message).height);

// message.style.height = // the original height is 49px  and now it is becoming 79px as 30 is added with parseFloat
//   Number.parseFloat(getComputedStyle(message).height) + 30 + 'px'; // here with parseFloat we are taking the number out of string and adding to the original class
// console.log(getComputedStyle(message).height);
// // we use setProperty method to change values of variables in css :root and we need to select it using documentElement as it belongs to document
// document.documentElement.style.setProperty('--color-primary', '#fa8074');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo);
// console.log(logo.alt);
// console.log(logo.getAttribute('src'));
// console.log(logo.src);
// //non-standard
// console.log(logo.designer); // undefined
// // getAttribute = tegishli bo'lgan dep tarjima qilinib u bilan masalan classga id yoki bu joyda designer degan elementga tegishli bolgan value ni olish uchun yoki o'zgartrish uchun setAttribute() dan foydalansa boladi
// console.log(logo.getAttribute('designer')); //Alan
// console.log(logo.setAttribute('designer', 'Muhammadaziz'));
// //yoki yaratsa boladi
// logo.setAttribute('lives', 'Korea');
// console.log(logo.className);
// console.log(logo.id);
// console.log(document.querySelector('.nav__link--btn').getAttribute('href')); //link ni ham olsak boladi
// console.log(logo.dataset.versionN); //getting property named data-version-n

// logo.classList.add('b', 'a'); // output nav__logo itslef and then b a like class ='nav__logo b a'
// logo.classList.remove('b', 'a'); // removes
// logo.classList.toggle('c'); //adding class
// console.log(logo.classList.contains('c')); //true
// console.log(logo);
