//Funzione con 3 parametri "hobbyOne" "hobbyTwo" "hobbyThree", + return
let hobbyOne = 'Gaming';
let hobbyTwo = 'Cooking';
let hobbyThree = 'Sleeping';

const hobbyList = (hobbyOne, hobbyTwo, hobbyThree) => {
    return hobbyOne + ' ' + hobbyTwo + ' ' + hobbyThree;
}

//Exports funzione
module.exports = hobbyList;