function carregar() {
  var msg= window.document.getElementById('msg')
  var foto= window.document.getElementById('img')

  var data= new Date()
  var hora= data.getHours()
  //var hora=22

  msg.innerHTML=(`Agora são ${hora} horas `)
  if(hora >=0 && hora < 12){
    foto.scr = 'ExerciciosCopia/HoraDoDia/Dia.png'
    document.body.style.background='purple'
  } else if(hora >= 12 && hora < 18){
    foto.scr= 'ExerciciosCopia/HoraDoDia/Tarde.png'
    document.body.style.background='gray'
  } else{
    foto.scr= 'ExerciciosCopia/HoraDoDia/Noite.png'
    window.document.body.style.background='black'
  }
}
/*function carregar(){
     
  var msg= window.document.getElementById('msg')
  var img= window.document.getElementById('imagem')
  var data= new Date()
  var hora= data.getHours()
  //= 19
  msg.innerHTML= `Agora são ${hora} horas.`
  if(hora>=0 && hora<12){
      img.scr= 'C:\Users\COLISEUM\Documents\CursoJs\ExerciciosCopia\HoraDoDia\Dia.png'
      document.body.style.background='white'
  }else if(hora>=12 && hora<18){
      img.scr='C:\Users\COLISEUM\Documents\CursoJs\ExerciciosCopia\HoraDoDia\Tarde.png'
      document.body.style.background='gray'
  }else{
      img.scr='C:\Users\COLISEUM\Documents\CursoJs\ExerciciosCopia\HoraDoDia\Noite.png'
      document.body.style.background='black'
  }
}*/
