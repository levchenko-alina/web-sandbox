console.log('Before timeout');

setTimeout(() => {
    console.log('Timeout 1');

    setTimeout(() => {
        console.log('Timeout 2');

        setTimeout(() => {
            console.log('Timeout 3');

            setTimeout(() => {
                console.log('Timeout 4');

                setTimeout(() => {
                    console.log('Timeout 5');
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

console.log('After timeout');
