function verificar(){
   var data= new Date()
   var ano= data.getFullYear()
   var fano= window.document.getElementById('txtano')
   var res= document.querySelector('div#res')

   if(fano.value.length == 0 || Number(fano.value)>ano){
    window.alert('Dados Inválidos, tente novamente')
   } else{
    var sexo=  document.getElementsByName('sexo')
    var idade= ano- Number(fano.value)
    var genero=''
    var img= document.createElement('img')
    img.setAttribute('id', 'foto')
    if(sexo[0].checked){
        genero='Homem'
        if(idade>=0 && idade<=12){
            //criança
            img.setAttribute('scr','foto-bebe-m.png')
        } else if(idade>12 && idade<=18){
            //jovem
            img.setAttribute('scr','jovemm.png')
        } else if(idade>18 && idade<=50){
            //adulto
            img.setAttribute('scr','adultom.png')
        } else{
            //velho
            img.setAttribute('scr','velhom.png')
        }
    } else if(sexo[1].checked){
        genero='Mulher'
        if(idade>=0 && idade<=12){
            //criança
            img.setAttribute('scr','criançaf.png')
        } else if(idade>12 && idade<=18){
            //jovem
            img.setAttribute('scr','jovemf.png')
        } else if(idade>18 && idade<=50){
            //adulto
            img.setAttribute('scr','adultof.png')
        } else{
            //velho
            img.setAttribute('scr','velhof.jpg')
        } 
    }
    res.style.textAlign='center'
    res.innerHTML= `Aparentemente você é ${genero}, com ${idade} anos de idade.`
   }
}