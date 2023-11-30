// Calculadora de partidas Rankeadas

 let resultado = pontosRankeados(174,20)

function pontosRankeados(vitorias, derrotas){
    let Subtrair = vitorias - derrotas
    return Subtrair 
}

avaliarPatamar(resultado)

function avaliarPatamar(){
    let vitorias = resultado
    let nivel =""
    if(vitorias <= 10){
        nivel = "Ferro" //vitorias entre 11 e 20
        return nivel
    }else if(vitorias >= 11 && vitorias <= 20){
        nivel = "Bronze" //vitorias entre 11 e 20
        return nivel
    }else if(vitorias >= 21 && vitorias <= 50){
        nivel = "Prata" //vitorias entre 21 e 50
        return nivel
    }else if(vitorias >= 51 && vitorias <= 80){
        nivel = "Ouro" //vitorias entre 21 e 80
        return nivel
    }else if(vitorias >= 81 && vitorias <= 90){
        nivel = "Diamante" //vitorias entre 81 e 90
        return nivel
    }else if(vitorias >= 91 && vitorias <= 100){
        nivel = "Lendário" //vitorias entre 91 e 100
        return nivel
    }else if(vitorias >= 101){
        nivel = "Imortal" //vitorias iguais a 101 ou maoires
        return nivel
    }else {
        console.log("Sem nivel definido")
    }

}
       
let rank = avaliarPatamar("")
console.log(`O Herói tem de saldo ${resultado} e está no nivel ${rank}!`)
