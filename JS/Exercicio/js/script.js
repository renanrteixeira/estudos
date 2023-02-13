function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var titulo = document.getElementById('titulo')

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    var info = ' Hora do Dia'

    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`

    if (hora >= 6 && hora < 12) {
       img.src = 'img/manha.png'
       document.body.style.background = '#e2cd9f'
       titulo.innerText = `Bom dia! ${info}`
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#b9846f'
        titulo.innerText = `Boa Tarde! ${info}`
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#515154'
        titulo.innerText = `Boa Noite! ${info}`
    }
}


document.body.onload = carregar()
