for (let i = 0; i < 10; i++) { //'i' is a helper variable(iteration)
    console.log(i);
}

const users = ['Wes', 'Max', 'Anna'];

for (const user of users) {
    console.log(user);
}

const loggedInUser = {
    name: 'Wes',
    age: 30,
    isAdmin: true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName])
}

let isFinished = false;

// while (!isFinished) {
//     isFinished = confirm('Do you want to quit?')
// }

// console.log('Done!')