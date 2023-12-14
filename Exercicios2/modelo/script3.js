function contar(){
    var comeco= window.document.getElementById('comeco')
    var final= window.document.getElementById('fim')
    var passo= window.document.getElementById('passo')
    var msg= window.document.getElementById('msg')
    
    if(comeco.value.lenght ==0 || final.value.lenght ==0 || passo.value.lenght==0){
        window.alert('Faltam dados')
        } else{
            msg.innerHTML='Contando '
            let c= Number(comeco.value)
            let f= Number(final.value)
            let p= Number(passo.value)
            for(var contador=c;contador<=f;contador+=p){
                msg.innerHTML+=` ${contador}`
            }
        }
}
