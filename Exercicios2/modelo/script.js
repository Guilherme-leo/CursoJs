function contar(){
    var comeco= window.document.getElementById('comeco')
    var final= window.document.getElementById('fim')
    var passo= window.document.getElementById('passo')
    var msg= window.document.getElementById('msg')
    //msg.innerHTML=(`${comeco}, ${final}, ${passo}`)
    if(comeco.value.length ==0 || final.value.length ==0 || passo.value.length==0){
        msg.innerHTML="Impossivel contar"
        alert('Faltam dados')
        } else{
            msg.innerHTML='Contando: <br>'
            let c= Number(comeco.value)
            let f= Number(final.value)
            let p= Number(passo.value)
            if(p<=0){
                window.alert('Passo 0, será considerado passo 1')
                p=1
            }
            if(c<f){
            //Contagem crescente
            for(let contador=c;contador<=f;contador+=p){
                msg.innerHTML+=`${contador} 😼 `
                }
               
                } else{
                    //Contagem decrescente
                    for(let contador=c;contador>=f;contador-=p){
                        msg.innerHTML+=`${contador} 😾`
                        }     
                    }
            msg.innerHTML +=`\u{1F3C1}`
        }  
}
