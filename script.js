let numeroRetornado = 0;
let numeroSomado = 0;
let numeroChecagem = 0;

while (true) {
    
    numeroChecagem = prompt("Digite um número para somar ou um número negativo para sair");

    //CHECAGEM DE NÚMERO VÁLIDO
    if (numeroChecagem == null || numeroChecagem.trim() == "" || isNaN(numeroChecagem)) {
        alert("Digite um número válido");
        continue;
    
    //SAIR DO LOOP E EXIBIR SOMA
    } else if (numeroChecagem < 0) {
        alert(`Soma dos números digitados: ${numeroSomado}`);
        break;

    //SOMAR NÚMEROS
    } else {
        numeroRetornado = parseInt(numeroChecagem);
        numeroSomado += numeroRetornado;
         
        }
}   

