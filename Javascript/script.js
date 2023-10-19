
const btn = document.querySelector('button');

btn.addEventListener('click',function(){
  // Vado a prendere la const della griglia

  const grigliaGioco = document.getElementById('campo-gioco');
 

 // Vado a specificare il numero di quadratini che devono esserci in tutta la griglia
 const celle = 100;

 //Creo un ciclo per formare numeri progressivi da 1 a 100
 
 for(let i = 0; i < celle; i++){

    //console.log(i)
    // genero quadratino richiamando la funzione
    let quadratino = creazioneQuadratino(i);
    //console.log(quadratino)
    //appendo il quadratino alla mia griglia
    grigliaGioco.append(quadratino);


}

})

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