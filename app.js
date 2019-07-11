let person1Input = document.getElementById('person-name-1');
let person2Input = document.getElementById('person-name-2');
let verb1Input = document.getElementById('verb-1');
let verb2Input = document.getElementById('verb-2');
let verb3Input = document.getElementById('verb-3');
let animal1Input = document.getElementById('animal-1');
let adverb1Input = document.getElementById('adverb-1');

function revealMadlib() {
    let person1 = person1Input.value;
    let person2 = person2Input.value;
    let verb1 = verb1Input.value;
    let verb2 = verb2Input.value;
    let verb3 = verb3Input.value;
    let animal1 = animal1Input.value;
    let adverb1 = adverb1Input.value;

    let fillInMadlib =
        person1 +
        ' and ' +
        person2 +
        ' were ' +
        verb1 +
        ' through the woods when suddenly a ferocious ' +
        animal1 +
        ' appeared! ' +
        adverb1 +
        ', they ' +
        verb2 +
        ' to a nearby tree, where they ' +
        verb3 +
        ' until morning.';
    let displayStory = document.getElementById('story');
    displayStory.textContent = fillInMadlib;
}
