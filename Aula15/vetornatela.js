let valores = [4,2,8,9,6]
valores.sort()
/*
for(let contador=0;contador<valores.length;contador++){
    console.log(`A posição ${contador} tem o valor ${valores[contador]}`)
}*/
for(let contador in valores){
    console.log(`A posição ${contador} tem o valor ${valores[contador]}`)
}