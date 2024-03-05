let str = '';
let strSqr = '';
for(i = 10; i <=20; i++) {
    str += i === 20 ? i : i + ', ';
    strSqr += i === 20 ? i**2 : i**2 + ', ';
}

console.log(`numbers from 10 to 20 -  ${str}`);
console.log(`squares of numbers from 10 to 20 -  ${strSqr}`);

let pifagor7  = [];

for(i = 1; i <=10; i++) {
    pifagor7.push(`${i} x 7 = ${i*7}`);    
}

console.log('pifagor table for number 7');
console.table(pifagor7);

let sum1to15 = 0;
for(i = 1; i <=15; i++) {
    sum1to15 += i; 
}

console.log(`sum of numbers from 1 to 15 is ${sum1to15}`);

let milti15to35 = 1;
for(i = 15; i <=35; i++) {
    sum1to15 *= i; 
}

console.log(`multiplication of numbers from 15 to 35 is ${milti15to35}`);

let average = 0;
for(i = 1; i <=500; i++) {
    average += i;
}

average /= i;

console.log(`average of numbers from 1 to 500 is ${average}`);

let sumEven = 0;
for(i = 30; i <=80; i++) {
    if (i % 2 === 0) {        
        sumEven += i;
    }
}

console.log(`sum  of even numbers from 30 to 80 is ${sumEven}`);

let str3 = [];
for(i = 100; i <=200; i++) {
    if (i % 3 === 0) {
        str3.push(i);        
    }
}

console.log(`numbers from 100 to 200 you can divide by 3 -  ${str3.join(', ')}`);

let num = +prompt("Please enter number");
let numArr = [];
let numEvenArr = [];
let sumEvenDivide = 0;
if (!isNaN(num) && num > 1) {
    for(i = 2; i <=num; i++) {
        if (num % i === 0) {
            if (i % 2 === 0) {
                numEvenArr.push(i);
                sumEvenDivide += i;
            }
            numArr.push(i);
        }        
    }
    console.log(`numbers with help of ${num}  can divided -  ${numArr.join(', ')}`);
    console.log(`even numbers with help of ${num}  can divided -  ${numEvenArr.join(', ')}`);
    console.log(`sum of even numbers with help of ${num}  can divided -  ${sumEvenDivide}`);
} else {
    console.log('Incorect data!');
}

let pifagorFull = [];
for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        if (i === 1) {
            pifagorFull.push([]);     
        }
        pifagorFull[i - 1].push(j*i);
    }    
}

console.table(pifagorFull);
