var idade= 25
console.log(`Por ter ${idade} anos, seu voto é: `);
if (idade<16) {
  console.log("Inválido, pois não vota")
} else if (idade<18 || idade>65) {
  console.log("É válido, e voto opicional")
} else{
  console.log("É válido, e voto obrigatório");
}