function calcular(){
    var multiplicando= window.document.getElementById('multiplicando')
    let multiplicador= window.document.getElementById('multiplicador') 
    if(multiplicando.value.length==0){
        window.alert('Erro informe um número diferente de zero')
    } else{
        var m= Number(multiplicando.value)
        let contador= 1
        while(contador<=10){
            let item = document.createElement('option')
            item.text=`${m} x ${contador} = ${m*contador}`
            multiplicador.appendChild(item)
        }

        /*
    
        resultado.innerHTML=`Tabuada do número ${m} <br>`
        for(let contador=1; contador<=10; contador+=1 && let c='salve'){
            var result= (m*contador)
            resultado.innerHTML+=`${m} x ${contador} = ${result} <br>`
        }*/
        
    }
} 