const errorMessage = `Year of birth should be valid number between 1900 and 2024`;
alert(`Hi body. 
Can you please answer several question?
It is important to register in the system`);
const year = +prompt("What is your year of birth?");
console.log(year);
if ((isNaN(year) || year < 1900 || year > 2024) && year !== 0) {
    alert(errorMessage);   
    throw new Error(errorMessage);     
}

const currentYear = 2024;
const age = currentYear - year;
const city = prompt("What city are you live in?");
const sport = prompt("What kind of sport are you fond of?");
let country = '';

if (city === 'Ankara') {
    country = 'Turkey';
} else if (city === 'Kiev') {
    country = 'Ukraine';
} else if (city === 'Minsk') {
    country = 'Belorussia';
} else if (city === 'Warszawa') {
    country = 'Poland';
} else if (city === 'Sofia') {
    country = 'Bulgaria';
} else if (city === 'London') {
    country = 'United Kingdom';
} else if (city === 'Prague') {
    country = 'Czech Republic';
} else if (city === 'Paris') {
    country = 'France';
} else if (city === 'Rome') {
    country = 'Italy';
}

let famous = '';

if (sport === 'football') {
    famous = 'Ronaldo';
} else if (sport === 'hokkey') {
    famous = 'Ovechkin';
} else if (sport === 'athletics') {
    famous = 'Bolt Usain';
} else if (sport === 'MMA') {
    famous = 'Konnor Mak Gregor';
} else if (sport === 'wrestling') {
    famous = 'Karelin';
} else if (sport === 'boxing') {
    famous = 'Mukhamed Ali';
} else if (sport === 'basketball') {
    famous = 'Michael Jordan';
} else if (sport === 'swimming') {
    famous = 'Yana Klochkova';
}

const ageStr = age !== 2024 ? `Your age is ${age}` : 'It is pity that you have not inputted year of birth';
const cityStr = city ? `You are living in  ${country ? "capital of the country " + country : "city " + city}` : 'It is pity that you have not inputted the city';
const sportStr = city ? `${famous ? "Cool! Want to be as " + famous : ""}` : 'It is pity that you have not inputted the sport';

alert(`${ageStr}
${cityStr}
${sportStr}
`);