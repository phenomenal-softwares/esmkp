var loader = document.getElementById('loader');
loader.style.display = "none";

const name = document.getElementById("name");
var fullName = name.value;


let text = fullName.toLowerCase();




function showRes(){
 var name = document.getElementById("name");
 fullName = name.value;
 accName = document.getElementById('acName').value;
 accNum = document.getElementById('acNum'). value;
 let text = fullName.toLowerCase();
 document.getElementById("form").innerHTML = "";
 loader.style.display = "block";

if (text.match(/(abiodun folakemi|agim esther|adeyemi emmanuel|akobi|ojo abiodun|philip|adewole|isaiah|daniel emmanuel|adelaja|asala|ajani|adekeye)/gi)) { 
 setTimeout(() => { 
 document.getElementById('id01').style.display = "block";
 document.getElementById('winner').innerHTML = fullName;
 }, 3000 ) 
} else if (fullName == "" || accName == "" || accNum == "" ) {
  document.getElementById('id03').style.display = "block";
}
else {
  setTimeout(() => { 
 document.getElementById('id02').style.display = "block";
 document.getElementById('loser').innerHTML = fullName;
 }, 3000 )
}

 }
