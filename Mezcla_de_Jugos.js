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

function limesToCut(cantidadGajos, limas) {
    // Contador de limas a cortar
    let limasACortar = 0;
    // Contador de gajos obtenidos
    let gajosObtenidos = 0;
  
    // Recorrer la lista de limas
    for (const lima of limas) {
      // Incrementar el contador de limas a cortar
      limasACortar++;
  
      // Obtener la cantidad de gajos de la lima actual
      let gajosPorLima = 0;
      switch (lima) {
        case "pequeña":
          gajosPorLima = 6;
          break;
        case "mediana":
          gajosPorLima = 8;
          break;
        case "grande":
          gajosPorLima = 10;
          break;
      }
  
      // Sumar los gajos de la lima actual al total
      gajosObtenidos += gajosPorLima;
  
      // Si ya se obtuvieron suficientes gajos, salir del ciclo
      if (gajosObtenidos >= cantidadGajos) {
        break;
      }
    }
  
    // Devolver la cantidad de limas a cortar
    return limasACortar;
  }

//Prueba de ejemplo  
const cantidadGajos = 20;
const limas = ["pequeña", "mediana", "grande", "pequeña"];
  
const limasACortar = limesToCut(cantidadGajos, limas);  
console.log(`Li Mei necesita cortar ${limasACortar} limas.`);
    