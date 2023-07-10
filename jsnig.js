
function Censo(){
  const aves = prompt('Ingresa las aves que registraste');
  const avesTotales = 25;

  if(aves >= avesTotales) {
    const avReg = aves - avesTotales
    return "Registraste todas las aves!"
  }else{
    const sinReg = avesTotales - aves;
    return "Aun te falta registrar" + sinReg;
  }
}
console.log(Censo())