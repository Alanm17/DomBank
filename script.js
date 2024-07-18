'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const scrollDown = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
const section2 = document.getElementById('section--2');
const h1 = document.querySelector('h1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
//
// const stickyclass = function () {
//   // const link = e.target.closest('.nav');
//   const coord1 = section1.getBoundingClientRect();
//   const coord2 = section2.getBoundingClientRect();

//   if (window.scrollY - 700 > coord1.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// };
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);
function callObserve(entries, observe) {
  if (!entries[0].isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
  // console.log(entries);
}
// bu IntersectionObserver funksiyasi asosan sticky nav yoki bar larga ishlatiladi
// observer.observe(header); bu narsa headerni belgilab olp unga threshold: 0, shu narsa bilan tasir foizini belgilab nmanidir boshlash yoki boshlamaslikni buyuradi callback fnc bilan agar tasir bor bolsa isIntersecting true truda yoksa false ex:if (!entries[0].isIntersecting) nav.classList.add('sticky');

const observer = new IntersectionObserver(callObserve, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
observer.observe(header);

// nice scrolled textAll
const sections = document.querySelectorAll('.section');

const revealFunc = function (secHead) {
  secHead.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observerr.unobserve(entry.target);
  });
};
const observerr = new IntersectionObserver(revealFunc, {
  root: null,
  threshold: 0.15,
  // rootMargin: `-50px`,
});
sections.forEach(section => {
  observerr.observe(section);
  section.classList.add('section--hidden');
});
// observerr.observe(sections);

// window.addEventListener('scroll', stickyclass);
// // adding an event listner to Learn More button
// // scroll function
scrollDown.addEventListener('click', function (e) {
  // const coordsS1 = section1.getBoundingClientRect();
  // console.log(coordsS1);
  // console.log(e.target.getBoundingClientRect()); // updated version of pageX/YOffset is scrollY/X
  // console.log('this is the data of X', window.scrollY, window.scrollX); //The window.pageXOffset property returns the number of pixels that the document has been horizontally scrolled from the left edge. Similarly, window.pageYOffset returns the number of pixels that the document has been vertically scrolled from the top edge.
  // console.log(document.documentElement.clientHeight); // bu ekran klentga qancha darajada ochiqligini px lda korsatadi
  // // window.scrollTo(
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
//
//
// Info Bar Selection Page
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);
  if (!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(con =>
    con.classList.remove('operations__content--active')
  );
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//NAV HOVERING

const hoverOver = function (e) {
  if (e.target.classList.contains('nav__link')) {
    // this method called 'contains()' can be used to find class names
    const link = e.target;
    // const siblings = nav.querySelectorAll('.nav__link'); //const siblings = link.closest('.nav')// this closest method is used to find the more relative class name or parent element of the target which is clicked over mouseovered
    // console.log(siblings);
    const logo = link.closest('.nav').querySelector('img');
    // console.log(logo);
    /// here we are simply selecting all html link elements named nav__link and adding funcion to each of them with the help of forEach method
    nav.querySelectorAll('.nav__link').forEach(element => {
      if (element !== link) element.style.opacity = this;
    });
    logo.style.opacity = 1; // we selected logo seperately as it was the first child of parent nav so we made the value of 1 set
  }
};

nav.addEventListener('mouseover', hoverOver.bind(0.5)); // so we can use bind method to set value in function
nav.addEventListener('mouseout', hoverOver.bind(1)); // same here
// reminder bind method creates the same function with its this keyword to set the provided value or set value
// now the point is hoverOver.bind(0.5)) in this function as we could not just set values to the function because we could not use it in two functions we did so  we equaled the opacity to == this and with bind method we created the same function inside Event and set desired value inside bind . so the parent of this bind is the value entered value === this
//ex :
// hoverOver.bind(0.5) // output this==0.5

const alert1 = function () {
  alert('you are using mouseenter event on heading');

  h1.removeEventListener('mouseenter', alert1); // removing the event right after it worked once
  // or we can put time to remove or add it after some time
  setTimeout(() => {
    h1.addEventListener('mouseenter', alert1);
  }, 10000);
};
h1.addEventListener('mouseenter', alert1);

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

/// nav bar scrolling with using target and contains and matching strategy event deligation
// The event.target property can be used in order to implement event delegation.
// vent delegation is a powerful technique that simplifies event handling, improves performance, and enhances the flexibility of your code. By leveraging the event bubbling mechanism, you can efficiently manage events on a group of elements rather than dealing with each one individually.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

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
//
// rgb(255, 255, 255);
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// //
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });
// //
// //
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

//
// DOm traversing

// const h11 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.parentNode);
// console.log(h11.parentElement);
h1.firstElementChild.style.color = '#ffff';
h1.lastElementChild.style.color = 'orangered';

/// going upward parents
h1.closest('.h2');
// h1.closest('.header').style.background = 'var(--gradient-primary)';
//The closest() method searches up the DOM tree for elements which matches a specified CSS selector.

//The closest() method starts at the element itself, then the anchestors (parent, grandparent, ...) until a match is found.

//The closest() method returns null() if no match is found.
// berilgan nom yani .header ni h1 ga eng yaqinini topadi va belgilaydi

// going sideways:siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.parentElement);
// console.log(h1.parentElement.children);
// console.log();
