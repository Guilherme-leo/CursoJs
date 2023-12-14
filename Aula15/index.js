let num= [8,5,7,6]
num[4]=9 
num.push(1) 

num.sort()

console.log(`Nosso vetor em ordem crescente é ${num}`)

let confirme= num.indexOf(8)
if(confirme==-1){
    console.log(`O número procurado não está em nenhuma posição no vetor`)
} else{
    console.log(`O número procurado está na posição ${confirme} do vetor`)
}