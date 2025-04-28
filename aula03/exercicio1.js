const numeros = [-1,-2,3,4,5]

const numerosPositivos = numeros.filter(numero => numeros>0)
const somaPositivos = numerosPositivos.reduce((soma, total) => soma+total,0)

const numerosNegativos = numeros.filter(numero => numeros<0).length

console.log(`Soma dos numeros positivos: `,somaPositivos)
console.log(`Quantidade de negativos: ${somaPositivos}`)
