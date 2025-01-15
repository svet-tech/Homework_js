let userInput = +prompt('Введите начальное число:')
let userInput2 = +prompt('Введите конечное число:')
let sum = 0
for (let i = userInput; i <= userInput2; ++i){
    sum += i;
}

console.log('Сумма чисел заданного диапазона: ' + sum)
