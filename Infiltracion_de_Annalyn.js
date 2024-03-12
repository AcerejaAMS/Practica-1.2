//Infiltracion de Annalyn

//Creacion de funciones de apoyo
function valorIndice(p){
    if(p===1)
        v=Math.floor(Math.random()*(0)+2);

    else
        v=Math.floor(Math.random()*(2));   
    return(v);
}

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


//Define variables y estados
let estado={0:"Despierto", 1:"Dormido", 2:"Perro", 3:"SinPerro"};
let caballero;
let arquero;
let prisionero;
let libre=false;
let annalyn;
function pregunta(libre){

    caballero=valorIndice(0);
    arquero=valorIndice(0);
    prisionero=valorIndice(0);
    annalyn=valorIndice(1);
    console.log("\t\t----------Estados----------");
    console.log(`\tCaballero: ${estado[caballero]}`);
    console.log(`\tArquero: ${estado[arquero]}`);
    console.log(`\tPrisionero: ${estado[prisionero]}`);
    console.log(`\tAnnalyn: ${estado[annalyn]}`);

    console.log("\t\t----------Opciones----------");
    console.log("\t[1] Ataque rapido");
    console.log("\t[2] Espia");
    console.log("\t[3] Señalar al prisionero");
    console.log("\t[4] Prisionero libre");
    r1.question('Selecciona una opción: ', (respuesta)=> {
        a=respuesta;
        switch(a){
            case "1":
                //Para ataque rapido
                if(estado[caballero]=="Dormido"){
                    console.log("\t(Disponible)");
                    libre=true;
                }else{
                    console.log("\t(No disponible)");    
                }   
            break;
            case "2":
                //Para espiar
                if(estado[caballero]=="Despierto" || estado[arquero]=="Despierto"){
                    console.log("\t(Disponible)");
                    libre=true;
                }else{
                    console.log("\t(No disponible)");    
                } 
            break;
            case "3":
                //Para señalar al prisionero
                if(estado[prisionero]=="Despierto" && estado[arquero]=="Dormido"){
                    console.log("\t(Disponible)");
                    libre=true;
                }else{
                    console.log("\t(No disponible)");    
                } 
            break;
            case "4":
                //Prisionero libre
                //Con perro
                if(estado[annalyn]=="Perro" && estado[arquero]=="Dormido"){
                    console.log("\tRescatar (Disponible)");
                    libre=true;
                }else if(estado[annalyn]=="SinPerro" && estado[prisionero]=="Despierto" && estado[arquero]=="Dormido" && estado[caballero]=="Dormido"){
                    console.log("\tEscapar (Disponible)");
                    libre=true;
                }else{
                    console.log("\t(No disponible)");    
                } 
            break;
        }
        if (libre == false){
            setTimeout(function(){pregunta(libre)},2000);
        }else{
            r1.close();
        }
    });

}
pregunta(libre)