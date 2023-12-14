function calcular(){
    var multiplicando= window.document.getElementById('multiplicando')
    if(multiplicando.value.length==0){
        window.alert('Erro informe um número diferente de zero')
    } else{
        var m= Number(multiplicando.value)
        resultado.innerHTML=`Tabuada do número ${m} <br>`
        for(let contador=1; contador<=10; contador+=1){
            var result= (m*contador)
            resultado.innerHTML+=`${m} x ${contador} = ${result} <br>`
        }
    }
}