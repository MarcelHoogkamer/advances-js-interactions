var objImage= null;
function init(){
  objImage=document.getElementById("birdimg");
  objImage2=document.getElementById("balloon");
  objImage.style.position='relative';
  objImage.style.left='200px';
  objImage.style.top='200px';
}

function getKeyAndMove(e){
  var key_code=e.key;
  switch(key_code){
    case 'ArrowLeft':
      moveLeft();
      break;
    case 'ArrowUp':
      moveUp();
      break;
    case 'ArrowRight':
      moveRight();
      break;
    case 'ArrowDown':
      moveDown();
      break;
    case 'Shift':
      downCrash();
      break;
    case 'Enter':
      makeDove();
      break;
    case 'Backspace':
      stealthMode();
      break;
    case 'Escape':
      balloonDrop();
      break;
  }
}

function balloonDrop(){
  objImage2.style.top=parseInt(objImage.style.top)+50 +'px';
  objImage2.style.top=parseInt(objImage.style.top)-50 +'px';
}

function stealthMode(){
  objImage.style.opacity= '0.1';
}

function makeDove(){
  objImage.style.filter= 'invert(100%)';
}
function downCrash(){
  objImage.style.top=parseInt(objImage.style.top)+1000 +'px';
}
function moveLeft(){
  objImage.style.transform= "scaleX(-1)";
  objImage.style.left=parseInt(objImage.style.left)-5 +'px';
}
function moveUp(){
  objImage.style.transform= "rotate(-90deg)";
  objImage.style.top=parseInt(objImage.style.top)-5 +'px';
}
function moveRight(){
  objImage.style.transform= "scaleX(1)";
  objImage.style.left=parseInt(objImage.style.left)+5 +'px';
}
function moveDown(){
  objImage.style.transform= "rotate(90deg)";
  objImage.style.top=parseInt(objImage.style.top)+5 +'px';
}
window.onload=init;

window.addEventListener("keydown", e => {
  getKeyAndMove(e);
  clear;
}
)
