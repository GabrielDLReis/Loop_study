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
const temAdulto = idadeFamilia.some(ehAdulto)
console.log(temAdulto)
