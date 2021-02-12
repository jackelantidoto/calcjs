//CALCULATOR SCRIPT
//****************************************************************


//catching the input element
const input=document.getElementById("inpt");//input box
const operationdisplay=document.getElementById('output');

var cifra="";//will catch a string

var cant= Number(cant);// will catch a float

var oprt="none";

var arrayelement=[];//this is the array that catches the whole variable
  
const buttons=document.getElementsByClassName('btn');//getting the touch inputs




//clear the input only
function clearNumber(){

	input.innerHTML="0.0";//clears the input
	arrayelement=[];//clears the array
	output.innerHTML='';//clears the output
	input.style.color='#333';

}//clearNumber




//clear one digit
function clearOneNumber(){
	input.innerHTML=input.innerHTML.slice(0, -1);
	input.style.color='#000';
}//clearOneNum






//get the keyCode value and add it to the input and to cifra var
function displayKey(num){
	if (input.innerHTML=="0.0") {
		input.innerHTML='';
	}
	input.innerHTML+=num;
	input.style.color='#000';

}




//listen for the keyboard
document.addEventListener('keypress', getKeyCode);

//linten for buttons
for (var i =0; i< buttons.length; i++) {
	buttons[i].addEventListener('click', (e)=>{	getButtonTouch(e);	});
}

	
