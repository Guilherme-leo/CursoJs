function contar(){
    var comeco= window.document.getElementById('comeco')
    var final= window.document.getElementById('fim')
    var passo= window.document.getElementById('passo')
    var msg= window.document.getElementById('msg')
    //msg.innerHTML=(`${comeco}, ${final}, ${passo}`)
    if(comeco.value.length==0 || final.value.length==0 || passo.value.length==0){
        window.alert('[ERRO] Faltam dados')
    }else{
        window.alert('deu bom')
        /*msg.innerHTML= 'Contando: '
        let i= Number(comeco.value)
        let f= Number(final.value)
        let p= Number(passo.value)

        for(let c= i; c<=f; c+=p){
            msg.innerHTML+= ` ${c}`
        }*/
    }

    /*if(comeco<final && passo!=0){
        var c= Number(comeco.value)
        var f= Number(final.value)
        var p= Number(passo.value)
        msg.innerHTML='Contando:'
       
        for(let cont=c; cont<=f;cont= cont+p){
            msg.innerHTML +=`${cont}`
        }*/
        /*while(cont<=f){
            msg.innerHTML =`${cont} `
            cont+=p 
        }*/
        /*for(var contador=comeco;contador<=fim;contador+=passo ){
            msg.innerHTML+=`${contador}`
        }*/
    /*}else{
        msg.innerHTML=(`</p>Não é possível contar de ${comeco} até ${final}, pulando de ${passo}`)
    }*/

}
