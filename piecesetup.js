let gameCont = document.getElementById('game');
let rows = 8, columns = 8;
let colorset= 0;
const pieceSetup = () =>{
  let hidden = document.getElementById('hide');
  document.getElementById('heading').classList.add('hide');
  document.getElementById('nameCard').classList.add('hide');
  hidden.classList.remove('hide');
for(let i = 1 ; i <= rows ; i++){
  let rowEl = document.createElement('div');
  rowEl.className = 'row';
  colorset = i%2===0 ? 1 : 0;
  for(let j = 1; j <= columns ; j++){
    let boxEl = document.createElement('div');
    boxEl.className = 'box';
    boxEl.setAttribute('id', i.toString()+j.toString());
   // boxEl.innerHTML =i.toString()+j.toString();
    rowEl.appendChild(boxEl);
if(colorset % 2 === 0)
boxEl.classList.add('yellow');
else boxEl.classList.add("pink");
colorset++;
  }
  gameCont.appendChild(rowEl);
  }
  initPieces();
}
const initPieces= () =>{
  let boxes = document.getElementsByClassName('box');
boxes[0].innerHTML =  boxes[7].innerHTML= boxes[56].innerHTML = boxes[63].innerHTML = "Rook";
boxes[1].innerHTML =  boxes[6].innerHTML= boxes[57].innerHTML = boxes[62].innerHTML = 'Knight';
boxes[2].innerHTML =  boxes[5].innerHTML= boxes[58].innerHTML = boxes[61].innerHTML = 'Bishop';
boxes[3].innerHTML =  boxes[60].innerHTML = 'Queen';
boxes[4].innerHTML =  boxes[59].innerHTML = 'King';
for(let i = 8 ; i < 16 ; i++){
  boxes[i].innerHTML = boxes[40 + i].innerHTML= 'Pawn';
}
for(let i = 0 ; i < 16 ; i++){
  boxes[i].style.color = 'blue'; 
   boxes[48 + i].style.color= 'red';
}
};

gameCont.addEventListener('click' , (event) => handleClick());



//boxes[12].style.display= 'none';