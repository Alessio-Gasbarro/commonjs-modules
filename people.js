//Importare funzione da names.js & hobbies.js
const fullname = require('./name.js');
const hobbyList = require('./hobbies.js');

//Funzione senza parametri usando quello che è stato importato

const newProfile = () => {
    const reqName = fullname('Alessio', 'Gasbarro');
    const reqHobbies = hobbyList('Gaming', 'Cooking', 'Sleeping');

    return {
        reqName,
        reqHobbies
    }
}

console.log(newProfile());