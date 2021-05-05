Array.from(document.querySelectorAll(".letter")).forEach(el => {
  el.innerText = randomLetter();
});

function randomLetter(){
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}


let content = document.getElementsByTagName('body')[0];
let darkMode = document.getElementById('dark-change');
darkMode.addEventListener("click", function() {
  darkMode.classList.toggle('active');
  content.classList.toggle('night');

})
