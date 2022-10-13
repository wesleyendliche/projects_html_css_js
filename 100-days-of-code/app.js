let age = 30;
let userName = 'Wesley';
let hobbies = ['Reading', 'Video games', 'Music'];
let job = { 
    title: 'Developer',
    place: 'Toronto',
    salary: 50000,
};

let adultYears;

function calculateAdultYears(userAge) {
    return userAge - 18;
}

adultYears = calculateAdultYears(age);
age = 45;
console.log(adultYears)

adultYears = calculateAdultYears(age);
console.log(adultYears);