let num1 = 2
const num2 = 3
var msg = "Olá amigo, esse é o número: "


// function para realizar uma soma...
function soma(){
let resultado = num1 + num2
console.log(msg + resultado)
}

soma()

function somaComParametros(valor1, valor2){
    console.log("o resultado é", valor1 + valor2)
    
}
somaComParametros(6, 11)
somaComParametros(7, 160)

const multiplicacao = (n1, n2) => {
    return n1 * n2
}

console.log(multiplicacao (2, 3))

let usuario = {
    nome: "Gabriel",
    idade: 22,
    signo: "Sagitário",
    calvo: false
}

console.log (typeof usuario)
console.log (
    "nome:", usuario.nome,
    "\n idade:", usuario.idade,
    "\n signo:", usuario.signo,
)
console.log (typeof usuario.calvo)

const nomes = ["Gabriel", "Leirbag"]

console.log(nomes)
console.log(typeof nomes)

const somaMelhorada = (n1, n2) => {
    let resultNovaFunc = ''
    if (typeof n1 == 'number' && typeof n2 == 'number') {
        resultNovaFunc = n1 + n2
        return "Resultado:", resultNovaFunc
    }
    return "Valores de entrada inválidos" 
}

console.log(somaMelhorada(6, 9))
console.log(somaMelhorada(6,"98"))