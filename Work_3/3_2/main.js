let userInput = +prompt('Введите число: ')
let userInput2 = +prompt('Введите второе число: ')
if (userInput > userInput2) {
    console.log(userInput - userInput2)
}
else if (userInput < userInput2) {
    console.log(userInput2 - userInput)
}
else console.log(userInput)
