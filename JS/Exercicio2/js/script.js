function verificar(){
    var ano = document.getElementById('ano')
    var data = new Date()
    var anoAtual = data.getFullYear()
    var resultado = document.querySelector('div#resultado')

    if (Number(ano.value) > anoAtual || ano.value.length == 0){
        alert('Informe o ano para realizar o cálculo!')
    } else {
        var sexo = document.getElementsByName('rbsexo')
        var idade = anoAtual - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 8){
                img.setAttribute('src', 'img/bebe_menino.png')
            } else if (idade >=8 && idade < 21) {
                img.setAttribute('src', 'img/crianca_menino.png')
            } else if (idade >= 15 && idade < 50) {
                img.setAttribute('src', 'img/jovem_homem.png')
            } else {
                img.setAttribute('src', 'img/idoso_homem.png')
            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 8){
                img.setAttribute('src', 'img/bebe_menina.png')
            } else if (idade >=8 && idade < 15) {
                img.setAttribute('src', 'img/crianca_menina.png')
            } else if (idade >= 15 && idade < 50) {
                img.setAttribute('src', 'img/jovem_mulher.png')
            } else {
                img.setAttribute('src', 'img/idoso_mulher.png')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} ano(s)`
        resultado.appendChild(img)
    }

}

var botao = document.getElementById('verificar')
botao.addEventListener('click', verificar)