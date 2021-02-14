

function getInputIntoArray(oper){//geting the values and the operatios into array

	if (input.innerHTML=='0.0') {

		if(oper=='-' || oper=='+'){
			arrayelement.push(oper);
			//operationdisplay.innerHTML+=oper;//adds to the output
		}		
	}else{

		arrayelement.push(input.innerHTML);
		if(oper!='='){
			arrayelement.push(oper);
		}
		//operationdisplay.innerHTML+=input.innerHTML+oper;//adds to the output
	}

	//output.innerHTML='';//clears the output

	for (var i = 0; i>arrayelement.length; i++) {
		output.innerHTML+=arrayelement[i];
	}

	

	input.innerHTML="0.0";//clears the input
	console.log(arrayelement);
}//getInputIntoArray





function calculate(){
	/*
	arrayelement.push(input.innerHTML);//pushes the last number
	operationdisplay.innerHTML+=input.innerHTML;//adds to the output
	input.innerHTML="0.0";//clears the input*/
	let stringcal='';

	for (var i =0; i<arrayelement.length; i++) {
		//convert into a string
		stringcal+=arrayelement[i];	
		console.log(stringcal);	
	}

	let result=eval(stringcal);//all calculations here
	output.innerHTML=result;
	input.innerHTML='='+result;//printing the result into the input 
	input.style.color='#5eff04';

	console.log(result);

	//caculate
}