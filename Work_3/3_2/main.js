let userInput = +prompt('Введите число: ')
let userInput2 = +prompt('Введите второе число: ')
while (userInput > 0 && userInput2 > 0)
if (userInput >= userInput2) {
   userInput = userInput - userInput2
}
else {
    userInput2 = userInput2 - userInput
}
console.log(Math.max(userInput, userInput2))
