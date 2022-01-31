// Crie um objeto que receba ao menos três propriedades sobre você.

let biel = {
    nome: "Gabriel",
    sobrenome: "Moraes",
    idade: 17
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.

biel.cidade = "Rio de janeiro"

// Remova uma propriedade desse objeto.

delete biel.sobrenome

//Mostre no console todas as propriedades desse objeto.

console.log(biel)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 

//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 

let cadastro = [
    {
        nome:"Mariana",
        idade:"18",
        telefone:"980230663",
        amigos:"",   
    },
    {
        nome:"Rafael",
        idade:"18",
        telefone:"986230213",
        amigos:"",   
    },
    {
        nome:"Andreia",
        idade:"20",
        telefone:"985449267",
        amigos:"",   
    },
    {
        nome:"Miguel",
        idade:"15",
        telefone:"972627891",
        amigos:"",   
    },
    {
        nome:"Renato",
        idade:"98",
        telefone:"927282920",
        amigos:"",   
    }
]
console.log(cadastro)


//Na propriedade amigos, adicione ao menos 4 itens.

cadastro[0].amigos = `Miguel, Rafael, Andreia e Renato`
cadastro[1].amigos = `Alice, Miguel, Sophia e Arthur`
cadastro[2].amigos = `Helena, Bernardo, Valentina e Heitor`
cadastro[3].amigos = `Manuela , Théo, Júlia e Pedro`
cadastro[4].amigos = `Cecília, Samuel, Isadora e Gustavo`

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos.substring(0,6))
console.log(cadastro[1].amigos.substring(0,5))
console.log(cadastro[2].amigos.substring(0,6))
console.log(cadastro[3].amigos.substring(0,6))
console.log(cadastro[4].amigos.substring(0,7))