const errorMessage = `Error
Number of hours should be valid positive number
Please reload the page and try again`;

const hoursCnt = +prompt("Please input count of hours");
if ( isNaN(hoursCnt) || hoursCnt <= 0) {
    alert(errorMessage);   
    throw new Error(errorMessage);     
}

const seconds = hoursCnt * 60 * 60;

alert(`Number of seconds is ${seconds}`);