

function getInputIntoArray(oper){//geting the values and the operatios into array

	if (input.innerHTML=='0.0') {

		if(oper=='-' || oper=='+'){
			arrayelement.push(oper);
			operationdisplay.innerHTML+=oper;//adds to the output
		}		
	}else{

		arrayelement.push(input.innerHTML);
		arrayelement.push(oper);
		operationdisplay.innerHTML+=input.innerHTML+oper;//adds to the output
	}

	input.innerHTML="0.0";//clears the input
	console.log(arrayelement);
}//getInputIntoArray


function calculate(){

	arrayelement.push(input.innerHTML);//pushes the last number
	operationdisplay.innerHTML+=input.innerHTML;//adds to the output
	input.innerHTML="0.0";//clears the input


	for (var i =0; i<arrayelement.length; i++) {
		//convert into float number
		switch(arrayelement[i]){
			
			case '+':

			break;

			case '-':

			break;

			case '*':

			break;

			case '/':

			break;

			default:
				arrayelement[i]=parseFloat(arrayelement[i]);
			break;
		}
		
	}


/*				this loop is broken for several multiplication
**************************************************************
*/
	for (var i = arrayelement.length-1; i < -1; i--) {
		//multiplication & division first
		switch(arrayelement[i]){

			case '*':
				multiply(i);
			break;

			case '/':
				divide(i);
			break;

		}
	}



	for (var i = 0; i < arrayelement.length; i++) {
		//addition & subtraction second
		switch(arrayelement[i]){

			case '+':
				addiction(i);
			break;

			case '-':
				//subtraction(i);
			break;

		}
	}

	console.log(arrayelement);

	//caculate
}