// Logar todos os números que são passados do 1 até o num
// Se o número for divisivel por 3, trocar o número por Fizz
// Se o número for divisível por 5, trocar o número por Buzz
// Se o número for divisível por 3 e 5, trocar o número por FizzBuzz

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        const isDivisibleByThree = i % 3 === 0;
        const isDivisibleByFive = i % 5 === 0;
        const isDivisibleByThreeAndFive = isDivisibleByThree && isDivisibleByFive;
        
        if (isDivisibleByThreeAndFive) {
            console.log('FizzBuzz');
        } else if (isDivisibleByThree) {
            console.log('Fizz');
        } else if (isDivisibleByFive) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(30);

// O operador modulus retorna o número que faltou depois que aquele número foi dividido por outro.
// Modulus operator gives you the remainder of a number after that number has been divided by another
// Exemplo 7 % 3 = Resultado é 1 
// O 3 multiplicado por 2 é igual a 6, sobrando 1 para completar o 7.
// Exemplo 100 % 30 = Resultado é 10
// O 30 é multiplicado por 3 é igual a 90, sobrando 10 para completar o 100.