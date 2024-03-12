//Punto 1
function timeToMixJuice(menu){
  let tiempo;//Variable de apoyo
  
  //Todos los casos del menu
  switch(menu){
      case "Pure Strawberry Joy":
          tiempo=0.5;
      break;
      case "Energizer":
          tiempo=1.5;
      break;
      case "Green Garden":
          tiempo=1.5;
      break;
      case "Tropical Island":
          tiempo=3.0;
      break;
      case "All or Nothing":
          tiempo=5.0;
      break;
      default://Sera default para todo caso no registrado en menu (ej. pedidos personalizados u ofertas de tiempo limitado)
          tiempo=2.5;
      break;
  }
  return(tiempo);
}

//Pruebas de retorno punto 1
jugos={1:"Pure Strawberry Joy",2:"Energizer",3:"Green Garden",4:"Tropical Island",5:"All or Nothing",6:"Pedidos personalizado"}
console.log(timeToMixJuice(jugos[1]));
console.log(timeToMixJuice(jugos[2]));
console.log(timeToMixJuice(jugos[3]));
console.log(timeToMixJuice(jugos[4]));
console.log(timeToMixJuice(jugos[5]));
console.log(timeToMixJuice(jugos[6]));

//Punto 2
function limesToCut(cantidadGajos, limas) {


console.log("Pedidos para Dmitry:", pedidosParaDmitry);