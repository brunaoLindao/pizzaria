var menuListArray = ["Pizza Vegetariana","pizza de queijo","pizza de carne","pizza de calabresa"];

function getMenu(){
var htmldata = '';
menuListArray.sort();
for(var i = 0;i<menuListArray.length;i++){
htmldata = htmldata+menuListArray[i]+'<br>';
}
document.getElementById('displayMenu').innerHTML=htmldata;
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
//Completar o código
menuListArray.push(item);
}

function addTop(){
getMenu();
}