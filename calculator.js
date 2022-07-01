function calculator(){
    //get the values from the prompt
        console.log("Calculating")
        let num1 = Number(prompt("Enter a number"));
        let num2 = Number(prompt("Enter a number"));
    
     // do the four operations
        let sum, subtract, multiply, divide;
        sum = num1 + num2;
        subtract = num1 - num2;
        multiply = num1 * num2;
        divide = num1 / num2;
        console.log(sum, subtract, multiply, divide);
        document.getElementById("results").innerHTML = `
            <p class="result">${num1} + ${num2} = ${sum}</p>
            <p class="result">${num1} - ${num2} = ${subtract}</p>
            <p class="result">${num1} * ${num2} = ${multiply}</p>
            <p class="result">${num1} / ${num2} = ${divide}</p>
            `
    }   