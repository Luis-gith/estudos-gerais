//console.log("Hello World!")

function returnEvenN(array) {
    let evenNums = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} é ímpar!`)
        }

    }
    console.log("Os números pares desse conjunto são:\n",evenNums);
}

let array = [1, 2, 4, 5, 7, 8];
returnEvenN(array);