const errorMessage = `Error
It is not a number!
Please reload the page and try again`;

const firstNum = prompt("Please input 1st number");
if ( isNaN(+ firstNum)) {
    alert(errorMessage);   
    throw new Error(errorMessage);     
}

const secondNum = prompt("Please input 2nd number");
if ( isNaN(+ secondNum)) {
    alert(errorMessage);   
    throw new Error(errorMessage);     
}

const finalMessage = ` User has inputed ${firstNum} and ${secondNum}
 * ${firstNum} + ${secondNum} = ${+ firstNum + +secondNum}
 * ${firstNum} - ${secondNum} = ${+ firstNum - +secondNum} 
 * ${firstNum} * ${secondNum} = ${+ firstNum * +secondNum} 
 * ${firstNum} / ${secondNum} = ${(+ firstNum / +secondNum).toFixed(2)} 
`;
alert(finalMessage);