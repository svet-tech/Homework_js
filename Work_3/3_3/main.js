let userInput = prompt('Введите число: ')
for (let i = 1; i <= userInput; i++)
    if (userInput % i === 0){
        console.log(i)
    }