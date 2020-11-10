
let name1, name2;
let msg = document.getElementById('congo');

const checkName = () => {
 name1 = document.getElementById('p1');
 name2 = document.getElementById('p2');
if(!validName(name1.value) ||  !validName(name2.value))
{
  msg.innerHTML = "Please enter valid name";
modal.style.display = 'flex';
 // alert("Invalid NAme");
  return;
}
playerchance[0].innerHTML = name1.value;
playerchance[1].innerHTML = name2.value;
//msg.innerHTML = instruction;
modal.style.display = 'flex';
pieceSetup();
console.log(name1.value, name2.value);
}

const validName = (name) =>{
if(name.trim() == "" || name == "" )
return false;
return true;
}