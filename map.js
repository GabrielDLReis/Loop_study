const temperatureCelsius = [0, 22, 31, 40, 45, 12, 3]
const toFahrenheit = value => (value * 9) / 5 + 32
const temperatureFahrenheit = temperatureCelsius.map(toFahrenheit)

console.log(temperatureCelsius)
console.log(temperatureFahrenheit)

// Ele joga todos os valores em uma nova array, tanto o resultado solicitado quanto os parâmetros guardados.
