const videoResolutions = [
  ['QVGA', '320x240', '4:3'],
  ['VGA', '640x480', '4:3'],
  ['VGA', '720x480', '4:3'],
  ['SVGA', '800x600', '4:3'],
  ['XGA', '1024x768', '16:9']
]

const resolution16_9 = videoResolutions.map(value => {
  if (value[2] == '16:9') return value
})
// Ele filta tudo que está na terceira caixa[2] e nos retorna o resultado
console.log(resolution16_9)
