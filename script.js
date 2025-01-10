function carregar(){
    var desenho = document.getElementById('foto')
    var txt = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()

    txt.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        //BOM DIA
        desenho.src = "images/fotomanha.png"
        document.body.style.background = '#768055'
    } else if (hora >=12 && hora < 18){
        //BOA TARDE
        desenho.src = "images/fototarde.png"
        document.body.style.background = '#db9a6f'
    }else{
        //BOA NOITE
        desenho.src = "images/fotonoite.png"
        document.body.style.background = '#1e3e4a'
    }

}