//Infiltracion de Annalyn

//Creacion de funciones de apoyo
function valorIndice(p){
    if(p===1)
        v=Math.floor(Math.random()*(0)+2);

    else
        v=Math.floor(Math.random()*(2));   
    return(v);
}

//Define variables y estados
let estado={0:"Despierto", 1:"Dormido", 2:"Perro", 3:"SinPerro"};
let caballero=valorIndice(0);
let arquero=valorIndice(0);
let prisionero=valorIndice(0);
let annalyn=valorIndice(1);

console.log("\t\t----------Opciones----------");
//Para ataque rapido
if(estado[caballero]=="Dormido"){
    console.log("\t[1] Ataque Rapido\t(Disponible)");
}else{
    console.log("\t[1] Ataque Rapido\t(No disponible)");
}

//Para espiar
if(estado[caballero]=="Despierto" || estado[arquero]=="Despierto"){
    console.log("\t[2] Espia\t(Disponible)");
}else{
    console.log("\t[2] Espia\t(No disponible)");
}

//Para señalar al prisionero
if(estado[prisionero]=="Despierto" && estado[arquero]=="Dormido"){
    console.log("\t[3] Señalar al prisionero\t(Disponible)");
}else{
    console.log("\t[3] Señalar al prisionero\t(No disponible)");
}

//Prisionero libre
console.log("\t[4] Prisionero libre");
//Con perro
if(estado[annalyn]=="Perro" && estado[arquero]=="Dormido"){
    console.log("\t\t1) El perro protege a Annalyn\t(Disponible)");
}else{
    console.log("\t\t1) El perro protege a Annalyn\t(No disponible)");
}
//Sin perro
if(estado[annalyn]=="SinPerro" && estado[prisionero]=="Despierto" && estado[arquero]=="Dormido" && estado[caballero]=="Dormido"){
    console.log("\t\t2) Ser astutos\t(Disponible)");
}else{
    console.log("\t\t2) Ser astutos\t(No disponible)");
}

 