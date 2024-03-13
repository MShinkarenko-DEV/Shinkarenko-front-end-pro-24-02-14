var pow = function(num, degree) {
    if (degree == 0) {

        return 1;
    }
    if (degree < 0) {

        return pow(1/num, -degree);
    }

    return num * pow(num, degree-1);
}

console.log(pow(2,3));
console.log(pow(2,0));
console.log(pow(2,-3));
console.log(pow(2,-8));