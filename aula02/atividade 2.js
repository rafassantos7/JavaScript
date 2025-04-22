const notas = [3,3,3]

const media = notas.reduce((total,notas) => (total + notas), 0)
console.log(media/3)