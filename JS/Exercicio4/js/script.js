function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')

    var resultado = document.querySelector('div#resultado')

    if (inicio.value.length == 0){
        resultado.innerHTML = 'Impossível contar'
       alert('Informe o inicio para realizar o cálculo!')
    } else if (fim.value.length == 0) {
        resultado.innerHTML = 'Impossível contar'
        alert('Informe o fim para realizar o cálculo!')
    }  else if (passo.value.length == 0 || Number(passo.value) == 0) {
        resultado.innerHTML = 'Impossível contar'
        alert('Informe o passo para realizar o cálculo!')
     } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        resultado.innerHTML = 'Contando:'
        resultado.style.textAlign = 'center'
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }

}

var botao = document.getElementById('contar')
botao.addEventListener('click', contar)