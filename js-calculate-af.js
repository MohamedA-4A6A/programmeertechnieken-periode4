function calculate() {
	var numbers = document.getElementById("numbers").value;
	var operation = document.getElementById("operation").value;
	
	var resultaat = 0;
	
    // 34,5,6
	var numbersArray = numbers.split(",");
	
	for(var index = 0; index < numbersArray.length; index++) {
		resultaat = parseInt(resultaat) + parseInt(numbersArray[index]);
        
	}
    console.log(resultaat);
	
	document.getElementById("result").innerHTML = resultaat;
}

console.log("1");