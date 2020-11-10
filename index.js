let twice = 0, turn = 0 ;
  let prevEle, prevId, precolor;
let gameover = false;
let playerchance = document.getElementsByClassName('chance');
let currcolor;



const getId = (i, j) => {
  return (i.toString() + j.toString());
};
  
const handleClick = () =>{
  if(gameover){return;}
twice++;

if(twice%2 !== 0){
  prevId = event.target.id;
  prevEle = document.getElementById(prevId);
if(prevEle.innerHTML === ""){
  console.log("Blank loop exec ")
twice--;
return;
}
}

//let playerchance = document.getElementsByClassName('chance');
if(twice%2 !== 0 && prevEle.innerHTML !== "" ){
//   if(turn %2 === 0){
//   currcolor = 'blue';
// playerchance[0].innerHTML = "Curr Player: Blue";
// playerchance[1].innerHTML = "Curr Player: Blue";

// }
//   else {currcolor = 'red';
//   playerchance[0].innerHTML = "Curr Player: Red";
//   playerchance[1].innerHTML = "Curr Player: Red";

// }
chance();
prevId = event.target.id;
prevEle = document.getElementById(prevId);
 precolor = prevEle.style.color;
 if(currcolor !== precolor)
return;
prevEle.classList.add("selected");
//console.log("Class listL ",prevEle.classList);
showRange(prevEle, parseInt(prevId/10), parseInt(prevId%10));
console.log(prevEle.innerHTML+" "+prevId);
}
 if(twice%2 === 0){
  prevEle.classList.remove("selected");
  let nextId = event.target.id;
  let nextIdElement = document.getElementById(nextId); 
   //console.log("This loop exec ");
  movePiece(nextIdElement, precolor, prevEle);
   removeRange();
   pawnPromotion();
  }

  
}

const showRange = (prevEle,x,y) =>{
  if(prevEle.innerHTML === 'Rook')
  rook(prevEle, x,y);
  if(prevEle.innerHTML === 'Knight'){
  console.log("Clicked on knight");
  knight(prevEle, x,y);}
  if(prevEle.innerHTML === 'Bishop')
  bishop(prevEle, x, y);
  if(prevEle.innerHTML === 'Queen')
  queen(prevEle, x, y);
  if(prevEle.innerHTML === 'King')
  king(prevEle, x, y);
  if(prevEle.innerHTML === 'Pawn')
  pawn(prevEle, x, y);
};


const removeRange =() => {
let el , kingcount = 0;
for(let i = 1 ; i <= rows ; i++){
for(let j = 1 ; j <= columns ; j++){

  el = document.getElementById(getId(i,j));
el.classList.remove('selected');
if(el.innerHTML === 'King')
kingcount++;
}
}
isOver(kingcount);
};

const isOver = (kingcount) =>{
if(kingcount !== 2){
gameover = true;
setTimeout(()=>{
  if(playerchance[0].style.opacity === 1)
msg.innerHTML = `${name1.value} won the game`
  else 
  msg.innerHTML = `${name2.value} won the game`;
  modal.style.display = 'flex';
}, 300);

}

}
const chance = ()=>{
if(turn %2 === 0){
  currcolor = 'blue';
playerchance[0].style.opacity = "1";
playerchance[1].style.opacity = "0.7";

}
  else {currcolor = 'red';
  playerchance[0].style.opacity = "0.7";
  playerchance[1].style.opacity = "1";
 
}}