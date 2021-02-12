


function getKeyCode(){



	var kcode=event.keyCode;

	console.log('here', kcode);

	switch (kcode) {

		case 46:
			var n=".";
			displayKey(n);
		break;


		case 48:
			var n="0";
			displayKey(n);
		break;

		case 49:
			var n="1";
			displayKey(n);
		break;

		case 50:
			var n="2";
			displayKey(n);
		break;

		case 51:
			var n="3";
			displayKey(n);
		break;

		case 52:
			var n="4";
			displayKey(n);
		break;

		case 53:
			var n="5";
			displayKey(n);
		break;

		case 54:
			var n="6";
			displayKey(n);
		break;

		case 55:
			var n="7";
			displayKey(n);
		break;

		case 56:
			var n="8";
			displayKey(n);
		break;	

		case 57:
			var n="9";
			displayKey(n);
		break;

		case 43:
			getInputIntoArray('+');
			//sumNumber();
		break;

		case 45:
			getInputIntoArray('-');
			//restNumber();
		break;

		case 42:
			getInputIntoArray('*');
			//timesNumber();
		break;

		case 47:
			getInputIntoArray('/');
			//divNumber();
		break;

		case 13:
			calculate();
			//equalNumber();
		break;

		case 32:
			clearNumber();
			//equalNumber();
		break;






	}
}//getKeyCode
