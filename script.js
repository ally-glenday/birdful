/* Blue Tit Call */
const blueTitAudio = document.getElementById("blue-tit-audio"); 
const blueTitCheckbox = document.getElementById("blue-tit-checkbox");

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


































  






