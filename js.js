window.onload = function () {


	var buttons = document.getElementsByClassName('btn');
	var screen = document.getElementById('screen');

	const operationsButtons = {
		'AC': () => {
			screen.innerHTML = '';
			return screen.innerHTML;
		},
		'DEL': () => {
			screen.innerHTML = screen.innerHTML.slice(0, -1);
			return screen.innerHTML;
		},
		'SQRT': () => {
			screen.innerHTML = Math.sqrt(screen.innerHTML);
			needReset = true;
			return screen.innerHTML;
		},
		'x^2': () => {
			screen.innerHTML = Math.pow(screen.innerHTML, 2);
			needReset = true;
			return screen.innerHTML;
		},
		'+': () => {
			a = screen.innerHTML;
			b = '+';
			needReset = true;
		},
		'-': () => {
			a = screen.innerHTML;
			b = '-';
			needReset = true;
		},
		'*': () => {
			a = screen.innerHTML;
			b = '*';
			needReset = true;
		},
		'/': () => {
			a = screen.innerHTML;
			b = '/';
			needReset = true;
		},
		'=': () => {
			const operations = {
				'+' : () => {
					let res = parseFloat(a) + parseFloat(screen.innerHTML);
					console.log(parseFloat(a), parseFloat(screen.innerHTML));
					needReset = true;
					return res;
				},
				'-' : () => {
					let res = parseFloat(a) - parseFloat(screen.innerHTML);
					needReset = true;
					return res;
				},
				'*' : () => {
					let res = parseFloat(a) * parseFloat(screen.innerHTML);
					needReset = true;
					return res;
				},
				'/' : () => {
					if (screen.innerHTML == '0') {
						alert('На ноль делить нельзя!');
						screen.innerHTML = '';
						return screen.innerHTML;
					}
					let res = parseFloat(a) / parseFloat(screen.innerHTML);
					needReset = true;
					return res;
				}
			}

			screen.innerHTML = operations[b]();
			return screen.innerHTML;
		}
	}

	
	let output = '';
	let needReset = false; 
	let a, b;
	for (i = 0; i < buttons.length; i++) {
	    buttons[i].onclick = function () {
	    	
	    	if (operationsButtons.hasOwnProperty(this.innerHTML)) {
	    		console.log(this.innerHTML);
	    		output = operationsButtons[this.innerHTML]();
	    	} else {
	    		if (needReset) {
	    			output = '';
	    			needReset = false;
	    		}
	    		output += this.innerHTML;
	    		screen.innerHTML = output;
	    	}
	    }
	}
}