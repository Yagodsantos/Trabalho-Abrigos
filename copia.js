const readlineSync = require('readline-sync')
let abrigosArray = []
let i = 1


function abrigosCadastro (){
console.log(`
1. Cadastro de abrigos
`)
const nome = readlineSync.question('Digite o nome do abrigo: ')
    const endereço = readlineSync.question('Digite o endereço do abrigo: ')
    const telefone = readlineSync.question('Digite o telefone do abrigo: ')
    const lotaçao = readlineSync.question('Qual a capacidade de lotação do abrigo? ')

    let armazem = {
        nome: nome, 
        endereço: endereço,
        telefone: telefone,
        lotaçao: lotaçao
    }
abrigosArray.push(armazem)
console.log('Abrigo cadastrado!')
}



function listar (){
 
    console.log('2. listar')
    if (abrigosArray.length === 0 ){
        console.log('Nenhum abrigo cadastrado!')
    
return    
}


console.log('Codigo    | Nome             | Endereço             | Telefone             | Capacidade')
console.log('---------------------------------------------------------------------------------------')


abrigosArray.forEach(armazem => {
    console.log(i, `        | ${armazem.nome.padEnd(15)}  | ${armazem.endereço.padEnd(10)}          | ${armazem.telefone.padEnd(10)}          | ${armazem.lotaçao.padEnd(10)}          `)
})


}

function procuraAbrigo() {
    console.log('3. Procurar abrigos')
    let procurar = readlineSync.question('Digite o nome do abrigo:')
    let abrigosResultado = abrigosArray.filter(armazem => armazem.nome === procurar)

    if (abrigosResultado.length > 0) {
        console.log('Codigo    | Nome             | Endereço             | Telefone             | Capacidade')
        console.log('---------------------------------------------------------------------------------------')
        
        
        abrigosArray.forEach((armazem, i)=> {
            console.log(i++, `        | ${armazem.nome.padEnd(15)}   | ${armazem.endereço.padEnd(10)}           | ${armazem.telefone.padEnd(10)}          | ${armazem.lotaçao.padEnd(10)}          `)
        })
    } else {
        console.log('Nenhum abrigo encontrado!')
    }
}
function padronizarLinhas (texto, tamanho){
    if(texto.lenght < tamanho) {
        return texto.padEnd(tamanho)
    } 
    else {
        return texto.slice(0, tamanho - 3) + ' '
    }
}

function menuPrincipal() {
    while (true) {
        const menu = readlineSync.question(
            `===== ABRIGOS TEMPORÁRIOS =====
1. Cadastrar abrigo
2. Listar abrigos
3. Procurar abrigo
4. Sair
Escolha uma opção: `
        )
    
        switch (menu) {
            case '1':
                abrigosCadastro()
                break
            case '2':
            listar()
                break
            case '3':
                procuraAbrigo()
                break
            case '4':
                console.log('O programa será encerrado.')
                return
}}


}



menuPrincipal()




