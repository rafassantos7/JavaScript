function verificar_valor(a){
    if(a >=0){
        return "Esse valor é positivo"
    }
    else{
        return "Esse valor é negativo"
    }
}

const numero = verificar_valor(10)

console.log(numero)