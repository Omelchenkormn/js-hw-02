let input;
let total = 0;
const array = [];
while (true) {
    input = prompt('Введите число');
    
if (isNaN(input)) {
    alert('ошибка, это не число');
    continue;
    }
    
if (input === null) {
    break;
    }


input = Number(input);
array.push(input)


}
for (let i = 0; i < array.length; i+=1) {
        total += array[i];
        
}

console.log(`Общая сумма чисел равна ${total}`);
console.log(array);

