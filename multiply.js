


function multiply(i){

	console.log(arrayelement[i-2], arrayelement[i-1], arrayelement[i], arrayelement[i+1], arrayelement[i+2]);

	let product; //result here

	if (arrayelement[i-2]=='-') {//first number is negatiive

		if (arrayelement[i+1]=='-') {
			//bouth number are negatives result is positive
			product=arrayelement[i-1]*arrayelement[i+2];//works
			
			if(i-2==0){
				arrayelement[0]=product;//works
				arrayelement.splice(i+2, 1);
				arrayelement.splice(i+1, 1);
				arrayelement.splice(i, 1);
				arrayelement.splice(i-1, 1);
			}else{
				arrayelement[i-1]=product;
				arrayelement.splice(i+2, 1);
				arrayelement.splice(i+1, 1);
				arrayelement.splice(i, 1);
			}

		}else{
			//1st number negative and 2nd positive resulting in a negative  value
			product=-arrayelement[i-1]*arrayelement[i+1];//works

			if(i-2==0){
				arrayelement[0]=product;//works
				arrayelement.splice(i+1, 1);
				arrayelement.splice(i, 1);
				arrayelement.splice(i-1, 1);
			}else{
				arrayelement[i-1]=product;
				arrayelement.splice(i+1, 1);
				arrayelement.splice(i, 1);
			}			
		}

	}else{

		if (arrayelement[i+1]=='-') {
			//second number is neg
			product=arrayelement[i-1]*-arrayelement[i+2];//works
			if (i-1==0){
				arrayelement[0]=product;
				arrayelement.splice(i+2, 1);
				arrayelement.splice(i+1, 1);
				arrayelement.splice(i, 1);
			}else{
				arrayelement[i-1]=product;
				arrayelement.splice(i+2, 1);
				arrayelement.splice(i+1, 1);
				arrayelement.splice(i, 1);
			}

		}else{
			//bouth are positive
			product=arrayelement[i-1]*arrayelement[i+1];//works
			
			arrayelement[i-1]=product;
			arrayelement.splice(i+1, 1);
			arrayelement.splice(i, 1);
		}
	}

	console.log(product);
	//multiply
}








function divide(i){

	console.log(arrayelement[i-2], arrayelement[i-1], arrayelement[i], arrayelement[i+1], arrayelement[i+2]);

	let cociente; //result here

	if (arrayelement[i-2]=='-') {//first number is negatiive

		if (arrayelement[i+1]=='-') {
			//bouth number are negatives result is positive
			cociente=arrayelement[i-1]/arrayelement[i+2];//works
			
			if(i-2==0){
				arrayelement[0]=cociente;//works
				arrayelement.splice(i+2, 1);
				arrayelement.splice(i+1, 1);
				arrayelement.splice(i, 1);
				arrayelement.splice(i-1, 1);
			}else{
				arrayelement[i-1]=cociente;
				arrayelement.splice(i+2, 1);
				arrayelement.splice(i+1, 1);
				arrayelement.splice(i, 1);
			}

		}else{
			//1st number negative and 2nd positive resulting in a negative  value
			cociente=-arrayelement[i-1]/arrayelement[i+1];//works

			if(i-2==0){
				arrayelement[0]=cociente;//works
				arrayelement.splice(i+1, 1);
				arrayelement.splice(i, 1);
				arrayelement.splice(i-1, 1);
			}else{
				arrayelement[i-1]=cociente;
				arrayelement.splice(i+1, 1);
				arrayelement.splice(i, 1);
			}					
		}

	}else{

		if (arrayelement[i+1]=='-') {
			//second number is neg
			cociente=arrayelement[i-1]/-arrayelement[i+2];//works
			if (i-1==0){
				arrayelement[0]=cociente;
				arrayelement.splice(i+2, 1);
				arrayelement.splice(i+1, 1);
				arrayelement.splice(i, 1);
			}else{
				arrayelement[i-1]=cociente;//comparar operradores
				arrayelement.splice(i+2, 1);
				arrayelement.splice(i+1, 1);
				arrayelement.splice(i, 1);
			}

		}else{
			//bouth are positive
			cociente=arrayelement[i-1]/arrayelement[i+1];//works
			
			arrayelement[i-1]=cociente;
			arrayelement.splice(i+1, 1);
			arrayelement.splice(i, 1);
		}
	}

	console.log(cociente);
	//divide
}











function addiction(i){

	console.log(arrayelement[i-2], arrayelement[i-1], arrayelement[i], arrayelement[i+1],);

	let result; //result here

	if (arrayelement[i-2]=='-') {//first number is negatiive

		result=-arrayelement[i-1]+arrayelement[i+1];
		if (i-2==0){
			arrayelement[i-2]=result;
			arrayelement.splice(i+1, 1);
			arrayelement.splice(i, 1);
			arrayelement.splice(i-1, 1);
		}else{
			arrayelement[i-1]=result;
			arrayelement.splice(i+1, 1);
			arrayelement.splice(i, 1);
		}

	}else{//firt number is positive

		result=arrayelement[i-1]+arrayelement[i+1];

		arrayelement[i-1]=result;
		arrayelement.splice(i+1, 1);
		arrayelement.splice(i, 1);
	}

	console.log(result);
	//addiction
}