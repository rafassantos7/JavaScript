const frutas = ['Maçã', 'Banana', 'Laranja']
console.log(frutas)

console.log(frutas[0])
console.log(frutas[1])

// Adicionando elementos
frutas.push('Uvas')
console.log(frutas)

// Remover elemento
frutas.pop() // Remove o último elementos
console.log(frutas)

frutas.splice(1,1) // Remove apenas o segundo elemento
console.log(frutas)

frutas.forEach((fruta,index) => {
    console.log(`${index}: ${fruta}`)
}) 