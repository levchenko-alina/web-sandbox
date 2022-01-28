const { delay } = require('./delay');

console.log('Before delay');

delay(1000)
    .then(() => {
        console.log('Timeout 1');

        return delay(1000);
    })
    .then(() => {
        console.log('Timeout 2');

        return delay(1000);
    })
    .then(() => {
        console.log('Timeout 3');

        return delay(1000);
    })
    .then(() => {
        console.log('Timeout 4');

        return delay(1000);
    })
    .then(() => {
        console.log('Timeout 5');

        return delay(1000);
    });

console.log('After delay');
