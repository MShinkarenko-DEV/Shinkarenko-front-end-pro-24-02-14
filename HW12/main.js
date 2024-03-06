const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function getRandomKey(max) {
    return Math.round(Math.random() * max);
}

function generateKey(len, list) 
{
    let str = '';
    const size = list.length;    
    for(var i = 0; i < len; i++) {
        str += list.charAt(getRandomKey(size));        
    }

    return str;
}

const key = generateKey(16, characters);
console.log(key); 