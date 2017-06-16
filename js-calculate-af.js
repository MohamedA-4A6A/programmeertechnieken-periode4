function calculate() {
	var numbers = document.getElementById("numbers").value;
	
	
	var resultaat = 0;
	
    // 34,5,6
	var numbersArray = numbers.split(",");
	if (document.getElementById("operation").value == "sum"){
	
        for(var index = 0; index < numbersArray.length; index++) {
		resultaat = parseInt(resultaat) + parseInt(numbersArray[index]);
    
	}
        
    
    
	document.getElementById("result").innerHTML = resultaat;
    }
    else if(document.getElementById("operation").value == "substract"){
    resultaat = parseFloat(numbersArray[0]);
    
        for(var index = 1; index < numbersArray.length; index++) {
		resultaat = resultaat - parseInt(numbersArray[index]);
    
	}
   document.getElementById("result").innerHTML = resultaat;
}
   else if(document.getElementById("operation").value == "multiply"){
    resultaat = parseFloat(numbersArray[0]);
    
        for(var index = 1; index < numbersArray.length; index++) {
		resultaat = resultaat * parseInt(numbersArray[index]);
    
	}
   document.getElementById("result").innerHTML = resultaat;
}
    else {
    resultaat = parseFloat(numbersArray[0]);
    
        for(var index = 1; index < numbersArray.length; index++) {
		resultaat = resultaat / parseInt(numbersArray[index]);
    
	}
   document.getElementById("result").innerHTML = resultaat;
}
}


console.log("1");