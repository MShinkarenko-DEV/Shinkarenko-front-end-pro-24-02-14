const ar = [12, 1, 'fdfd', 'ddd', 43, 2, 122, 'dddd', 'hhh', 0, 8, 9, 'retro', 43, 32, 5, "22"];

var numAverage = function(array) {
    const numArray = array.filter((element) => !isNaN(element));
    let sum = 0;
    numArray.forEach(element => {
        sum += + element;
    });    

    return sum/numArray.length;    
}

console.log(numAverage(ar));


var doMath = function(x, znak, y) {
    let res = `Calculation error. We cannot process operation - ${znak}`
    switch (znak.trim().toLowerCase()) {
        case '+': 
            res = x + y;
            break;
        case '-': 
            res = x - y;
            break;
        case '*':
            res = x * y;
            break;
        case '/':
            res = x / y;
            break;         
        case '^':
        case 'pow':
        case '**':
            res = x ** y;
            break;             
    }

    return res;
}

console.log(doMath(3, '+', 5));
console.log(doMath(3, '-', 5));
console.log(doMath(3, '*', 5));
console.log(doMath(3, '/', 5));
console.log(doMath(3, 'POw', 5));
console.log(doMath(3, 'avada kedavra', 5));

var getMatrix = function(){
    const mainArraySize = + prompt('please set length of main array');
    if (isNaN(mainArraySize) || mainArraySize < 1) {
        return "Unable to create Matrix with invalid length"
    }
    let i = 0;
    const ret = [];
    let subArray = [];
    let subArraySize = '';
    let element = '';
    while (i < mainArraySize) {
        subArraySize  = + prompt(`please set length of sub array no ${i + 1} `);
        if (isNaN(subArraySize) || subArraySize < 1) {
            console.log("Unable to create sub array with invalid length. Please try again");

            continue;
        }
        subArray = [];
        for(var j = 0; j < subArraySize; j++) {
            element = prompt('Input element');
            subArray.push(element);    
        }
        ret.push(subArray);
        i++;    
        
    }

    return ret;
}

console.log(getMatrix());

var stringFilter = function(str, filerArr){
    let sArr = str.split("");
    filerArr.forEach(el => {
       sArr = sArr.filter((element) => el != element);  
    });

    return sArr.join('');
} 

console.log(stringFilter('hello world', ['h', 'e', 'd', 'l'])); 
