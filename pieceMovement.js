let piece;



//this function will move the piece from intitial position to final position
const movePiece =(currIdEle, prevColor,preEle) =>{
  if(currIdEle.classList.contains('selected')){
  piece = preEle.innerHTML;
  preEle.innerHTML = "";
currIdEle.innerHTML = piece;
currIdEle.style.color = prevColor;
turn++;
chance();
  }
};

const followup = (prevColor, i, j) =>{
  let ele = document.getElementById(getId(i,j));
let currColor = ele.style.color;
if(ele.innerHTML !== "" && prevColor !== currColor){
  ele.classList.add('selected');
  return false;
}
else if(ele.innerHTML !== "" && prevColor === currColor){
  return false;
}
ele.classList.add('selected');
return true;
}


const rook = (prevEle ,x, y) =>{
let prevColor = prevEle.style.color;
for(let i = x + 1 ; i <= rows ; i++){
  if(!followup(prevColor, i, y))
 break;
}

for(let i = y + 1 ; i <= columns ; i++){
  if(!followup(prevColor, x, i))
  break;
  }

  for(let i = x - 1 ; i <= rows ; i--){
    if(!followup(prevColor, i, y))
    break;
     }
    
    for(let i = y - 1 ; i <= columns ; i--){
      if(!followup(prevColor, x, i))
      break;
      }
};


const bishop = (prevEle, x, y) =>{
  let prevColor = prevEle.style.color;
 for(let i = x + 1 , j = y + 1 ; i <= rows && j <= columns ; i++, j++){
if(!followup(prevColor, i , j))
break;
 }
 for(let i = x + 1 , j = y - 1 ; i <= rows && j > 0 ; i++, j--){
  if(!followup(prevColor, i , j))
  break;   }
   for(let i = x - 1 , j = y + 1 ; i > 0 && j <= columns ; i--, j++){
    if(!followup(prevColor, i , j))
    break;     }
     for(let i = x - 1 , j = y - 1 ; i > 0 && j > 0 ; i--, j--){
      if(!followup(prevColor, i , j))
      break;       }
};


const queen = (prevEle, x, y) =>{
bishop(prevEle, x, y);
rook(prevEle, x, y);
}


const king = (prevEle, x, y) =>{
let el;
  // up left  
  if(x > 1 && y > 1 ){
  el = document.getElementById(getId(x - 1, y - 1));
if(prevEle.style.color !== el.style.color || el.innerHTML === "")
el.classList.add('selected');
  }

// up right
if(x > 1 && y < 8){
el = document.getElementById(getId(x - 1, y + 1));
if(prevEle.style.color !== el.style.color  || el.innerHTML === "")
el.classList.add('selected');
}

// up only
if(x > 1){
el = document.getElementById(getId(x -1, y));
if(prevEle.style.color !== el.style.color  || el.innerHTML === "")
el.classList.add('selected');
}

// left only 
if(y > 1){
el = document.getElementById(getId(x, y - 1));
if(prevEle.style.color !== el.style.color  || el.innerHTML === "")
el.classList.add('selected');
}

//right only
if(y < 8){
el = document.getElementById(getId(x, y + 1));
if(prevEle.style.color !== el.style.color  || el.innerHTML === "")
el.classList.add('selected');
}

// down right
if(x < 8 && y < 8 ){
el = document.getElementById(getId(x + 1, y + 1));
if(prevEle.style.color !== el.style.color  || el.innerHTML === "")
el.classList.add('selected');
}

// down only
if(x < 8){
el = document.getElementById(getId(x + 1, y));
if(prevEle.style.color !== el.style.color  || el.innerHTML === "")
el.classList.add('selected');
}

//down left
if(x < 8 && y > 1){
el = document.getElementById(getId(x + 1, y - 1))
if(prevEle.style.color !== el.style.color  || el.innerHTML === "")
el.classList.add('selected');
}
};


const knight = (prevEle, x, y) =>{
  let el;
    // up left  
    if(x < 7 && y < 8 ){
    el = document.getElementById(getId(x + 2, y + 1));
  if(prevEle.style.color !== el.style.color || el.innerHTML === "")
  el.classList.add('selected');
    }
  
  // up right
  if(x < 8 && y < 7){
  el = document.getElementById(getId(x + 1, y + 2));
  if(prevEle.style.color !== el.style.color  || el.innerHTML === "")
  el.classList.add('selected');
  }
  
  // up only
  if(x > 2 && y < 8){
  el = document.getElementById(getId(x - 2, y + 1));
  if(prevEle.style.color !== el.style.color  || el.innerHTML === "")
  el.classList.add('selected');
  }
  
  // left only 
  if(x > 2 && y > 1){
  el = document.getElementById(getId(x - 2, y - 1));
  if(prevEle.style.color !== el.style.color  || el.innerHTML === "")
  el.classList.add('selected');
  }
  
  //right only
  if(x > 1 && y > 2){
  el = document.getElementById(getId(x - 1, y - 2));
  if(prevEle.style.color !== el.style.color  || el.innerHTML === "")
  el.classList.add('selected');
  }
  
  // down right
  if(x > 1 && y < 7 ){
  el = document.getElementById(getId(x - 1, y + 2));
  if(prevEle.style.color !== el.style.color  || el.innerHTML === "")
  el.classList.add('selected');
  }
  
  // down only
  if(x < 7 && y > 1){
  el = document.getElementById(getId(x + 2, y - 1));
  if(prevEle.style.color !== el.style.color  || el.innerHTML === "")
  el.classList.add('selected');
  }
  
  //down left
  if(x < 8 && y > 2){
  el = document.getElementById(getId(x + 1, y - 2))
  if(prevEle.style.color !== el.style.color  || el.innerHTML === "")
  el.classList.add('selected');
  }
  };

const pawn = (prevEle, x, y) => {
  let prevColor = prevEle.style.color;
  let el, el1, el2;
  if(prevColor === 'blue'){
    el = document.getElementById(getId(x + 1, y));
    if(el.innerHTML === ""){
    el.classList.add('selected');
    }
    el1 = document.getElementById(getId(x + 1, y + 1));
    el2 = document.getElementById(getId(x + 1, y - 1));
    if(el1.style.color !== prevColor && el1.innerHTML !== ""){
      el1.classList.add('selected');
      }
      if(el2.style.color !== prevColor && el2.innerHTML !== ""){
        el2.classList.add('selected');
        }
    }
    else if(prevColor === 'red'){
      el = document.getElementById(getId(x - 1, y));
      if(el.innerHTML === ""){
      el.classList.add('selected');
      }
      el1 = document.getElementById(getId(x - 1, y + 1));
      el2 = document.getElementById(getId(x - 1, y + 1));
      if(el1.style.color !== prevColor && el1.innerHTML !== ""){
        el1.classList.add('selected');
        }
        if(el2.style.color !== prevColor && el2.innerHTML !== ""){
          el2.classList.add('selected');
          }
      }
 }

 const pawnPromotion = () =>{
   let el1, el2;
for(let i = 1 ; i <= columns ; i++){
  el1 = document.getElementById(getId(8,i));
  el2 = document.getElementById(getId(1,i));

if(el1.innerHTML === 'Pawn')
el1.innerHTML = "Queen";

if(el2.innerHTML === 'Pawn')
el2.innerHTML = "Queen";
}
 };