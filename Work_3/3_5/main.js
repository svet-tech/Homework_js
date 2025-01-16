// function userNumbers() 
let num = 0
let i = 0
let positiveNum = 0
let negativeNum = 0
let zero = 0

do {
    num = prompt('Введите число')
    i++
    if (num > 0) {
        positiveNum++
    }
    else if (num < 0) {
        negativeNum++
    }
    else {
        zero++
    }
}
while (i <= 10)

console.log('Положительных чисел: ' + +positiveNum)
console.log('Отрицательных чисел: ' + +negativeNum)
console.log('Нолей: ' + +zero)


