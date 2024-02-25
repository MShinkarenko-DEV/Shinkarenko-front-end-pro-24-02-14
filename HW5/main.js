const errorMessage = `Error
Number is not valid
Please reload the page and try again`;

const fstNumber = +prompt("Please input 1st number");
if (isNaN(fstNumber)) {
    alert(errorMessage);   
    throw new Error(errorMessage);     
}

const sndNumber = +prompt("Please input 2nd number");
if (isNaN(sndNumber)) {
    alert(errorMessage);   
    throw new Error(errorMessage);     
}

const thrdNumber = +prompt("Please input 3rd number");
if (isNaN(thrdNumber)) {
    alert(errorMessage);   
    throw new Error(errorMessage);     
}

const result = (fstNumber + sndNumber + thrdNumber)/3;

alert(`Average is  ${result}`);