/* Blue Tit Call */
var blueTitAudio = document.getElementById("blue-tit-audio"); 
var blueTitCheckbox = document.getElementById("blue-tit-checkbox");

function playBlueTitCall(){
  if(blueTitCheckbox.checked){
    blueTitAudio.play();
    blueTitLabel.innerHTML("Hey");
    
  }
  else{
    blueTitAudio.pause();  
    blueTitLabel.innerHTML("Ho");
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




































  






