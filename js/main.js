Array.from(document.querySelectorAll(".letter")).forEach(el => {
  el.innerText = randomLetter();
});

function randomLetter(){
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

// DARK MODE FEATURE
let content = document.getElementsByTagName('body')[0];
let darkMode = document.getElementById('dark-change');
darkMode.addEventListener("click", function() {
  darkMode.classList.toggle('active');
  content.classList.toggle('night');

})

// IMAGE SLIDER
let slide = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".indicator");
let before = document.querySelector(".before");
let id = 0;
let last = slide.length - 1;
let after = id + 1;
function next() {
  if (id === slide.length - 1) {
    id = 0;
    last = slide.length - 1;
    after = 1;
  } else {
    id++;
    after = id + 1;
    last = id - 1;
  }
  let second = (slide[id].style.display = "block");
  let prev = (slide[last].style.display = "none");
  dots[id].style.background = "dimgray";
  dots[last].style.background = "darkgray";
  displayPrev(slide, last);
  displayNext(slide, after);
}
function prev() {
  if (id !== 0) {
    id--;
    after = id - 1;
    last = id + 1;
  } else {
    id = slide.length - 1;
    after = 4;
    last = 0;
  }
  let next = (slide[id].style.display = "block");
  let prev = (slide[last].style.display = "none");
  dots[id].style.background = "dimgray";
  dots[last].style.background = "darkgray";
  displayPrev(slide, after);
  displayNext(slide, last);
}
function displayPrev(slide, id) {
  let a = (id === -1) ? 5 : id;
  document.querySelector(".before")
    .innerHTML = slide[a].innerHTML;
}
function displayNext(slide, id) {
  let a = (id === slide.length) ? 0 : id;
  document.querySelector(".after")
    .innerHTML = slide[a].innerHTML;
}
function makeElement(slide) {
  let before = document.createElement("div");
  before.innerHTML = slide[slide.length - 1].innerHTML;
  before.setAttribute("class", "before");
  let after = document.createElement("div");
  after.innerHTML = slide[1].innerHTML;
  after.setAttribute("class", "after");
  let parent = document.querySelector(".slider");
  parent.append(before, after);
}
makeElement(slide);

//IMAGE GALLERY
let largeView = document.querySelector(".largeView");
let largeImage = document.querySelector(".largeImage");
let caption = document.getElementById("caption");

document.querySelectorAll(".card").forEach(element => {
  element.addEventListener("click", event => {
    largeView.style.display = "block";
    largeImage.src = event.target.src;
    caption.innerHTML = event.target.alt;
  });
});
document.querySelector(".close").addEventListener("click", () => {
  largeView.style.display = "none";
});

//IMAGE ON HOVER

let queried = document.querySelectorAll('.onhover-toggle-child-class');
let elements = Array.prototype.slice.call(queried);

let onhover = function(event) {
  let element = event.srcElement || event.target;
  let selector = element.getAttribute('data-target');
  let classes = element.getAttribute('data-toggle').split(' ');
  let childs = element.querySelectorAll(selector);

  childs.forEach(function(child) {
    classes.forEach(function(toggleClass) {
      if (child.classList.contains(toggleClass))
        child.classList.remove(toggleClass);
      else
        child.classList.add(toggleClass);
    });
  });
}

elements.forEach(function(element) {
  element.addEventListener('mouseenter', onhover);
  element.addEventListener('mouseleave', onhover);
});

//FOLLOW THE MOUSE


// function getMouseCoords(e) {
//   var e = e || window.event;
//   document.getElementById('container').innerHTML = e.clientX + ', ' +
//     e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
// }
//
// var followCursor = (function() {
//   var s = document.createElement('div');
//   s.style.position = 'absolute';
//   s.style.width = '50px';
//   s.style.height = '50px';
//   s.style.margin = '0';
//   s.style.backgroundColor = 'red';
//   s.style.borderRadius = '50%';
//
//   return {
//     init: function() {
//       document.body.appendChild(s);
//     },
//
//     run: function(e) {
//       var e = e || window.event;
//       s.style.left = (e.clientX - 5) + 'px';
//       s.style.top = (e.clientY - 5) + 'px';
//       getMouseCoords(e);
//     }
//   };
// }());
//
// window.onload = function() {
//   parentdiv = document.getElementById("parentdiv");
//   followCursor.init();
//   document.body.onmousemove = followCursor.run;
// }

//AVOID THE MOUSE

//TEXT EFFECTS
