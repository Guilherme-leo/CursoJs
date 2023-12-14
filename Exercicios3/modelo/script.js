let num= window.document.getElementById('valor')
let lista= window.document.querySelector('select#confirmacao')
let res= document.querySelector('div#res')
let valores=[]
let soma= 0
function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    } else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n))!=-1 ){
        return true
    } else{
        return false
    }
}
function Adicionar(){
    if(isNumero(num.value)==true && inLista(num.value, valores)==false){
        let numero= Number(num.value)
        valores.push(numero) 
        let item= document.createElement('option')
        item.text =`Valor ${numero} adicionado`
        lista.appendChild(item)
        res.innerHTML=""
       soma += numero 
    } else{
        window.alert('Valor inválido ou já consta na lista')
    }
    num.value=""
    num.focus()
}
function Finalizar(){
    if(valores.length == 0){
        window.alert('Erro! Informe algum valor')
    }else{
        let total= valores.length

        res.innerHTML=""
    res.innerHTML+=`<br> Ao todos, temos ${total} números cadastrados.`
    
    valores.sort()
    res.innerHTML+=`<br> O menor valor informado foi ${valores[0]}`

    let maior= valores.length
    let qnt= Number(maior)
    let x= qnt-1
    res.innerHTML+=`<br> O maior valor informado foi ${valores[x]}`
    
    res.innerHTML+=`<br> Somando todos os valores, temos ${soma} `
    let media= soma/qnt 
    res.innerHTML+=`<br> A média dos valores digitados é ${media}`
    }
    
}