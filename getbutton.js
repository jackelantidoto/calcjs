


function getButtonTouch(element){

	let btn=element.target.value;
	//console.log(btn);

	switch (btn){

		case '+':
			getInputIntoArray(btn);
		break;

		case '-':
			getInputIntoArray(btn);
		break;

		case '*':
			getInputIntoArray(btn);
		break;

		case '/':
			getInputIntoArray(btn);
		break;

		case '=':
			getInputIntoArray(btn);
			calculate();
		break;

		case '<':
			clearOneNumber();
		break;

		case 'C':
			clearNumber();
		break;

		default:
			displayKey(btn);
		break;

	}
}