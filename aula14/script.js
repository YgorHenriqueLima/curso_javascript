function Carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = "agora são " + hora + " horas"

    if (hora >= 0 && hora < 12){
        img.src = 'img/foto_de_manha.png'
        document.body.style.background = '#a3835e'
    } 

    else if (hora >= 12 && hora < 18){
        img.src = 'img/foto_de_tarde.png'
        document.body.style.background = '#d27f64'
    } 
    
    else {
        img.src = 'img/foto_de_noite.png'
        document.body.style.background = '#296470'
    }
}