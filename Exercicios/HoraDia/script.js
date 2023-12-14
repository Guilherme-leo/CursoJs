function carregar(){
     
    var msg= window.document.getElementById('msg')
    var img= window.document.getElementById('imagem')
    var data= new Date()
    var hora= data.getHours()
    hora= 19
    msg.innerHTML= (`Agora são ${hora} horas.`)
    if(hora>=0 && hora<12){
        img.scr= '/Exercicios/HoraDia/Dia.png'
        document.body.style.background='purple'
    }else if(hora>=12 && hora<18){
        img.scr='/Exercicios/HoraDia/Tarde.png'
        document.body.style.background='gray'
    }else{
        img.scr='/Exercicios/HoraDia/Noite.png'
        document.body.style.background='black'
    }
}
