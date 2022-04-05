// let input;
// let total = 0;
// const numbers = [];
 
// // numbers.push(input);
// // input = Number(prompt('Введите число'));

// // input.push(total);


// while (true) {
//     input = prompt('Введите число');
//     if (isNaN(Number(input))) {
//         alert('Попробуйте еще раз, введите число')
//         continue;
//     }
//     if (input === null) {
//         break;
//     }
//     input = Number(input);
//     numbers.push(input);
// }

// console.log(`Сумма ${total}`);


let input;
let total = 0;
const array = [];
while (true) {
input = prompt('Вводим аккуратно число');
if (isNaN(Number(input))) {
    alert('я же сказал,аккуратно,это не число');
    continue;
}
if (input === null) {
    break;
}
input = Number(input);
array.push(input)
total+=input;
}
console.log(`вот твоя  сумма ${total}`);
console.log(array);

