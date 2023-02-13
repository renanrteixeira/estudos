function gerar(){
    let numero = document.getElementById('numero')
    let result = document.getElementById('result')

    if (numero.value.length == 0 || Number(numero.value) == 0) {
        alert('Informe um número válido!')
    } else {
        let num = Number(numero.value)
        result.options.length = 0
        for (let i = 1; i <= 10; i++){
            let item = document.createElement('option')
            let valor = num * i;
            item.value = i
            item.innerHTML = `${num} x ${i} = ${valor}`
            result.appendChild(item);
        }
    }
}

var botao = document.getElementById('gerar')
botao.addEventListener('click', gerar)