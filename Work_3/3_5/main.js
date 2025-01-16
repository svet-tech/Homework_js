let num = 0
let i = 0
let positiveNum = 0
let negativeNum = 0
let zero = 0
let evenNum = 0
let oddNum = 0

do {
    num = prompt('Введите число')

    if (num > 0 && num % 2 === 0) {
        positiveNum++
        evenNum++
    }
    else if (num > 0 && num % 2 != 0) {
        positiveNum++
        oddNum++
    }
    else if (num < 0 && num % 2 === 0) {
        negativeNum++
        evenNum++
    }
    else if (num < 0 && num % 2 != 0) {
        negativeNum++
        oddNum++
    }
    else {
        zero++
    }

    i++
}
while (i < 10)

console.log('Положительных чисел: ' + +positiveNum)
console.log('Отрицательных чисел: ' + +negativeNum)
console.log('Нолей: ' + +zero)
console.log('Четных чисел: ' + +evenNum)
console.log('Нечетных чисел: ' + +oddNum)


