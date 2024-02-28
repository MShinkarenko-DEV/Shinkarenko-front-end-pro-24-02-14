const errorMessage = `Year of birth should be valid number between 1900 and 2024`;
alert(`Dear user! 
Can you please answer several question?
Never forget that Homeland is watching you!`);
const year = +prompt("What is your year of birth?");
if ((isNaN(year) || year < 1900 || year > 2024) && year !== 0) {
    alert(errorMessage);   
    throw new Error(errorMessage);     
}

const currentYear = 2024;
const age = currentYear - year;
const city = prompt("What city are you live in?");
const sport = prompt("What kind of sport are you fond of?");
let country = '';
if (city !== null) {
    if (city.toUpperCase() === 'London'.toUpperCase()) {
        country = 'United Kingdom';
    } else if (city.toUpperCase() === 'Kiev'.toUpperCase()) {
        country = 'Ukraine';
    } else if (city.toUpperCase() === 'Washington'.toUpperCase()) {
        country = 'USA';
    }
}


let famous = '';

if (sport !== null) {
    if (sport.toUpperCase() === 'football'.toUpperCase()) {
        famous = 'Ronaldo';
    } else if (sport.toUpperCase() === 'athletics'.toUpperCase()) {
        famous = 'Bolt Usain';
    }  else if (sport.toUpperCase() === 'boxing'.toUpperCase()) {
        famous = 'Mukhamed Ali';
    }
}

const ageStr = year !== 0 ? `Your age is ${age}` : 'It is pity that you have not inputted year of your birth';
const cityStr = city ? `You are living in ${country ? "capital of the country" + country : "city" + city}` : 'It is pity that you have not inputted  the city you are livin in';
const sportStr = sport ? `${famous ? "Cool! You are going to be just like " + famous : ""}` : 'It is pity that you have not inputted  the sport you are fond of';

alert(`${ageStr}
${cityStr}
${sportStr}
`);