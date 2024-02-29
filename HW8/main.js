function print(text)
{
    let field = document.getElementById('textField');
    field.innerHTML = text;    
    console.log(text);
}

let ar = [];
const cnt = +prompt(`Please enter count of array elements`);

if (isNaN(cnt) || cnt <= 0) {
    const errorMessage = `Error!
    Count of array elements is positive number.
    Please reload the page and try again`;

    alert(errorMessage);
    throw new Error(errorMessage);
}

let index = 0;
let element = '';
while(index < cnt) {
    element = prompt('Please enter elemet');
    ar.push(element);
    print(ar);
    index++;
}

if (ar.length > 1) {
    ar.splice(1,3);
    print(ar);
}

