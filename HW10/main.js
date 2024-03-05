let line = [];
for(var i = 20; i <=30; i = i + 0.5) 
{
    line.push(i);
}

console.log(line.join(' '));

let course = 27;
let moneyLine = [];
for(var i = 10; i <=100; i = i + 10) 
{
    moneyLine.push(i*course);
}

console.log(moneyLine.join(' '));

let num = +prompt("Please enter number");

if (!isNaN(num) && num > 1) {
    var i = 1;
    let squareLine = [];
    while(i < 100 && i**2 < num) {
        squareLine.push(i);
        i++;
    }
    console.log(squareLine.join(', '));
} else {
    console.log('Incorrect data');
}

let simpleNum = +prompt("Please enter number");

if (!isNaN(simpleNum) && simpleNum > 1) {
    
    for(var i = 2; i < simpleNum; i++) {
        if (simpleNum % i === 0) {
            console.log(`number ${simpleNum} is not simple number`);
            break;
        }        
    }

    if (i === simpleNum) {
        console.log(`number ${simpleNum} is simple number`);
    } 
} else {
    console.log('Incorrect data');
}

let num3 = +prompt("Please enter number");

if (!isNaN(num3) && num3 > 1) {
    
    for(var i = 2; i < num3; i++) {        
        if ( 3**i === num3) {
            console.log(`number ${num3} is 3 to the power of ${i}`);
            break;
        }        
    }

    if (i === num3) {
        console.log(`unable to set 3 to the power of any number to get ${num3}`);
    } 
} else {
    console.log('Incorrect data');
}
