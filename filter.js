const numeros = [12, 35, 57, 88, 4, 9, 11587, 764, 2345, 34, 12]
const par = n => n % 2 === 0
const numerosPar = numeros.filter(par)

console.log(`Array com números pares: ${numerosPar}`)

// Filtra só o resultado da array
// Podemos usar como comparação do array filtrado e o array inteiro.
