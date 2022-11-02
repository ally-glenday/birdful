/* Blue Tit Call */
var blueTitAudio = document.getElementById("blue-tit-audio"); 
var blueTitCheckbox = document.getElementById("blue-tit-checkbox");

function playBlueTitCall(){
  if(blueTitCheckbox.checked){
    blueTitAudio.play();
    
    
  }
  else{
    blueTitAudio.pause();  

  }
} 
 

/* Great Tit Call */
const greatTitAudio = document.getElementById("great-tit-audio");
const greatTitCheckbox = document.getElementById("great-tit-checkbox");

function playGreatTitCall(){
  if(greatTitCheckbox.checked){
    greatTitAudio.play();
    
  }
  else{
    greatTitAudio.pause();  
  }
}

/* Coal Tit Call */
const longTailedTitAudio = document.getElementById("long-tailed-tit-audio");
const longTailedTitCheckbox = document.getElementById("long-tailed-tit-checkbox");

function playLongTailedTitCall(){
  if(longTailedTitCheckbox.checked){
    longTailedTitAudio.play();
  }
  else{
    longTailedTitAudio.pause();  
  }
}

/* Magpie Call */
const magpieAudio = document.getElementById("magpie-audio");
const magpieCheckbox = document.getElementById("magpie-checkbox");

function playMagpieCall(){
  if(magpieCheckbox.checked){
    magpieAudio.play();
  }
  else{
    magpieAudio.pause();  
  }
}

/* Wood Pigeon Call */
const woodPigeonAudio = document.getElementById("wood-pigeon-audio");
const woodPigeonCheckbox = document.getElementById("wood-pigeon-checkbox");

function playWoodPigeonCall(){
  if(woodPigeonCheckbox.checked){
    woodPigeonAudio.play();
  }
  else{
    woodPigeonAudio.pause();  
  }
}

/* House Sparrow Call */
const houseSparrowAudio = document.getElementById("house-sparrow-audio");
const houseSparrowCheckbox = document.getElementById("house-sparrow-checkbox");

function playHouseSparrowCall(){
  if(houseSparrowCheckbox.checked){
    houseSparrowAudio.play();
  }
  else{
    houseSparrowAudio.pause();  
  }
}




































  






