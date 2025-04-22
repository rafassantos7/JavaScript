// Criando um vetor de objetos
const usuarios = [
    {nome: 'Marta', idade: 30},
    {nome:'José', idade: 35},
    {nome:'Carla', idade: 25}
]

// Exibindo 
usuarios.forEach(usuario =>{
    console.log(`Nome: ${usuario.nome} \nidade: ${usuario.idade}\n`)
})

// Filtrar idade maior que 30
const idadeMaiorQue30 = usuarios.filter(usuario => usuario.idade >= 30)
console.log(idadeMaiorQue30)

console.log('Listando todos os usuarios.')

usuarios.forEach(usuario=>
    console.log(`Nome: ${usuario.nome}, idade: ${usuario.idade}`))

console.log(`\nIdade maior que 30.`)
idadeMaiorQue30.forEach(usuario=>{
    console.log(`Nome: ${usuario.nome}, idade: ${usuario.idade}`)
})

// Encontrar um usuario especifico
const usuarioEncontrado = usuarios.find( usuario=> usuario.nome === `Marta`)
// Devolve um objeto
console.log(`\nEncontrando usuario`)
console.log(usuarioEncontrado) // Resposta como objeto

console.log(`Nome: ${usuarioEncontrado.nome}, idade: ${usuarioEncontrado.idade}`)

const apenasNomes = usuarios.map(usuario => usuario.nome)
apenasNomes.forEach(nome => console.log(nome))

console.log('\nLista com nomes dos usuarios - numerado')
apenasNomes.forEach((nome,index) => console.log(`${++index}: ${nome}`))


// Somando todas as idades
console.log('\nSoma de todas as idades')
const somaIdades = usuarios.reduce((total,usuario) => total + usuario.idade, 0)
console.log(`Soma das idades: ${somaIdades}`)

//Transformar elementos
const numeros = [2,4,6,8,9]
console.log('\nOperação de multiplicação - dobrar valor')
const numerosDobrados = numeros.map(numero => numero * 2)
console.log(numeros)
console.log(numerosDobrados)

console.log('\nFiltrando numeros pares')
const pares = numeros.filter(n => n %2 ===0)
console.log(pares)

console.log('\nSomando numeros pares')
const total = numeros.reduce((soma,atual) => soma + atual, 0)
console.log(total)