
/**
 * 
 * @param {Number} preco 
 * @param {Number} desconto 
 */
var calcular = (preco, desconto) => preco*(100-desconto)/100;

var botaoSubmeterListener = () =>{
    let preco = Number(document.querySelector("#preco").value);
    let desconto = Number(document.querySelector("#desconto").value);
    let resultado = calcular(preco, desconto);
    document.querySelector("#valor").textContent = resultado;
}

var botaoSubmeter = document.querySelector("#submeter");
botaoSubmeter.addEventListener("click", botaoSubmeterListener);


