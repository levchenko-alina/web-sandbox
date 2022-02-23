const { delay } = require('./delay');

const repeater = async () => {
    await delay(1000);
    console.log('Timeout 1');
    await delay(1000);
    console.log('Timeout 2');
    await delay(1000);
    console.log('Timeout 3');
    await delay(1000);
    console.log('Timeout 4');
    await delay(1000);
    console.log('Timeout 5');
};

console.log('Before delay');

repeater();

console.log('After delay');
