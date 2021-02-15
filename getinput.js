

function getInputIntoArray(oper){//geting the values and the operatios into array

	if (input.innerHTML=='0.0') {

		if(oper=='-' || oper=='+'){
			arrayelement.push(oper);
			//operationdisplay.innerHTML+=oper;//adds to the output
		}		
	}else{

		arrayelement.push(input.innerHTML);//gets input into array
		if(oper!='='){
			arrayelement.push(oper);
		}
		//operationdisplay.innerHTML+=input.innerHTML+oper;//adds to the output
	}

	output.innerHTML='';//clears the output

	for (var i = 0; i<arrayelement.length; i++) {
		output.innerHTML+=arrayelement[i];
	}

	

	input.innerHTML="0.0";//clears the input
	console.log('print', arrayelement);
}//getInputIntoArray





function calculate(){
	
	let stringcal='';

	for (var i =0; i<arrayelement.length; i++) {
		//convert into a string
		stringcal+=arrayelement[i];		
	}

	let result=eval(stringcal);//all calculations here
	output.innerHTML+='=';
	input.innerHTML=result;//printing the result into the input 
	input.style.color='#5eff04';
	arrayelement=[];//clears array

	console.log(result, arrayelement);

	//caculate
}