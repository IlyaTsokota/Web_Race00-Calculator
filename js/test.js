class Calculator{
	result = 0; //результат операции, который отображается 
	number;
	isComplete = true;
	isClear = true;
	Addition(){
		this.result += this.number;
		this.isComplete = true;
	}
	Subtraction() {
		this.result -= this.number;
		this.isComplete = true;
	}
	Multiplication() {
		this.result *= this.number;
		this.isComplete = true;
	}
	Division() {
		this.result /= this.number;
		this.isComplete = true;
	}
	Precent(n) {
		this.number = n;
	}
	Reset() {
		this.result = 0;
	}
	Point() {
		
	}
	Sign() {
		
	}
}
var cal = new Calculator();

function addSign() {
	var n = Number(document.getElementById("input").value);
	document.getElementById("input").value = n * -1;
}
function resetResult() {
	document.getElementById("input").value = "";
	document.getElementById("history").value += ";\n";
	cal.Reset();
	cal.isComplete = true;
	cal.isClear = true;
}
function percent() {
	var n = Number(document.getElementById("input").value)/100;
	console.log(n);
	cal.number = cal.result * n;
	document.getElementById("input").value = cal.number;
	
}
function addNum(obj){
	if(cal.isClear){
		document.getElementById("input").value += obj.textContent;
	} else {
		document.getElementById("input").value = "";
		document.getElementById("input").value += obj.textContent;
		cal.isClear = true;
	}
}
function addOperation(obj){
	if(cal.isComplete){
		document.getElementById("history").value += document.getElementById("input").value + " " + obj.textContent;
		cal.result = Number(document.getElementById("input").value);
		cal.isClear = false;
		cal.isComplete = false;
	} else {
		complete();
		addOperation(obj);
	}
}
function complete(){
	var tmp = document.getElementById("history").value.split(" ");
	var sign = tmp[tmp.length-1];
	cal.number = Number(document.getElementById("input").value);
	document.getElementById("history").value += " " + document.getElementById("input").value + " = ";
	cal.isClear = false;
	
	switch (sign) {
		case "+": 
			cal.Addition();
			document.getElementById("input").value = cal.result;
			break;
		case "-": 
			cal.Subtraction();
			document.getElementById("input").value = cal.result;
			break;
		case "*": 
			cal.Multiplication();
			document.getElementById("input").value = cal.result;
			break;
		case "/": 
			cal.Division();
			document.getElementById("input").value = cal.result;
			break;
	}
	document.getElementById("history").value += cal.result +"; \n";
}