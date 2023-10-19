
const btn = document.querySelector('button');
const numeroBombe = 16;

btn.addEventListener('click',function(){
 
  
  btn.onclick = function(){
    btn.disabled= true;
  }

  const grigliaGioco = document.getElementById('campo-gioco');

 const celle = 100;
 
 for(let i = 0; i < celle; i++){

    //console.log(i)

    let quadratino = creazioneQuadratino(i);
    //console.log(quadratino)
    
    grigliaGioco.append(quadratino);   
   
    }

    const bombeArray= generaBombe()
    console.log(bombeArray)
    grigliaGioco.append(bombeArray);
    //let coloreRosso = clickBombe()
    //console.log(coloreRosso)

})

 // FUNZIONE CREAZIONE QUADRATINI CAMPO DA GIOCO

function creazioneQuadratino(campo){
    // Creo una const per poi successivamente assegnargli classe css 
    const quadratino = document.createElement ('div');

    //Aggiungo alla const la classe css
    quadratino.classList.add('cella-gioco');    
    quadratino.innerHTML = campo +1;
    //Al click la cella cambia colore e il numero viene stampato in console
    quadratino.addEventListener('click', function(){
        quadratino.classList.add('backround');
        console.log(quadratino.innerHTML)
        
    })
    
    return quadratino;

}

// FUNZIONE CHE GENERA 16 BOMBE 

function generaBombe(){
    const bombeArray = [];
    
    while (bombeArray.length < numeroBombe){
        let bomba = getRndInteger (1,16)
        console.log(bomba)
        
        
        if(!bombeArray.includes(bomba)){
            bombeArray.push(bomba);
        }
    }
    console.log(bombeArray);
    return bombeArray;
}

function clickBombe(quadratino){
    quadratino.addEventListener('click', function(){
        quadratino.classList.add('backround-color');        
        console.log(quadratino.innerHTML);
        
    })
}



function getRndInteger(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;   
            
}