let person1 = document.getElementById('person-name-1');
let person2 = document.getElementById('person-name-2');
let verb1 = document.getElementById('verb-1');
let verb2 = document.getElementById('verb-2');
let verb3 = document.getElementById('verb-3');
let animal1 = document.getElementById('animal-1');
let adverb1 = document.getElementById('adverb-1');


function revealMadlib() {
    person1.textContent = person1.value;
    console.log('Tada!');
}

revealMadlib();