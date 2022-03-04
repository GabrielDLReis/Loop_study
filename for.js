const japones = ['japonês', 'chinês', 'asiático', 'tailandês', 'chingling']

for (let i = 0; i < japones.length; i++) {
  console.log(`${i + 1}, ${japones[i]}`)

  //Lemos dentro do looping cada elemento dentro da array para depois, nos entregar os dados numerados que estão dentro da array

  if (japones[i] == 'tailandês') break
  // Podemos usar o break para parar o looping quando encontrarmos o desejado.
}
