const idadeFamilia = [
  {
    nome: 'Gabriel',
    idade: 20
  },
  {
    nome: 'Leila',
    idade: 47
  },
  {
    nome: 'Alexandro',
    idade: 52
  }
]

const ehAdulto = valor => valor.idade >= 18
const somenteAdulto = idadeFamilia.every(ehAdulto)
console.log(somenteAdulto)

// Neste loop, conseguimentos retornar um resultado boolean, que nos informa se todos são maiores de idade ou não.
