function calcular(){
  var agora= new Date()
  var ano= agora.getFullYear()
  var nasc= window.document.getElementById('ano')
  var sexo= document.getElementsByName('sexo')
  var resp= document.getElementById('resp')

  var cal= ano-Number(nasc.value)
  if (nasc.value.length == 0 || Number(nasc.value)>ano)  {
    resp.innerHTML="Dados Inválidos"
  }else{
    var genero=''
    if (sexo[0].checked) {
      //Homem
    var genero="Homem"
    }else{
    var genero="Mulher"
    }
    resp.innerHTML=`Você é um(a) ${genero}, e tem ${cal} anos`
  }
  
}