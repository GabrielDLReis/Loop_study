const videos = [
  {
    id: 'p9mqWsjfasd4',
    title:
      'Teclado Mecânico é melhor pra programação? + Desafio de Youtubers Tech // vlog #117',
    views: 37208
  },
  {
    id: 'ikdjfdj1BA312',
    title:
      'Python na prática fazendo Web Scraping (de JavaScript dinâmico) // Mão no código #28',
    views: 22510
  },
  {
    id: 'jiasdhHGDk123',
    title:
      'As TOP 7 Profissões de Tecnologia do Futuro (O PROGRAMADOR VAI ACABAR?) // Vlog #112',
    views: 34732
  }
]

const totalViews = videos.reduce((sum, video) => {
  return sum + video.views
}, 0)

// o "sum" dentro de .reduce é um acumulador. Determinamos o valor do acumulador como 0 para que não some com nenhum valor anterior. Caso tivessemos alguma soma anterior, poderiámos acrescentar no "acumulador(0)"

console.log(totalViews)
