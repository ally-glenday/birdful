// function toggleDropdown() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }




//<audio id="testAudioCall"><source src="bird_calls/blue-tit.mp3" type="audio/mpeg">
//Sorry, but it appears your browser does not support the audio element.
//</audio>
//<input type="checkbox" id="test-call" onclick="testCall()">


/* <audio id="testAudioCall"><source src="bird_calls/blue-tit.mp3" type="audio/mpeg">
                  Sorry, but it appears your browser does not support the audio element.
                  </audio>
                <input type="checkbox" id="test-call" onclick="testCall()"> */


// document.getElementsByTagName("audio").style.display = "none"; 

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






// /* Blue Tit Call */ 
//   var blueTitCall = document.getElementById("blue-tit-call");
//   function playBlueTitCall(){
//     blueTitCall.play();
//   }
//   function pauseBlueTitCall(){
//     blueTitCall.pause();
//   }

//   /* Great Tit Call */ 
//   var greatTitCall = document.getElementById("great-tit-call");
//   function playGreatTitCall(){
//     greatTitCall.play();
//   }
//   function pauseGreatTitCall(){
//     greatTitCall.pause();
//   }
  
































  //  <audio id="blue-tit-audio"><source src="bird_calls/blue-tit.mp3" type="audio/mpeg">
  //     Sorry, but it appears your browser does not support the audio element.
  //     </audio>
  //   <input id="blue-tit-checkbox" onclick="playBlueTitCall" type="checkbox">





  // <input type="checkbox" id="cena" onchange="myfunction(this)" />
  // <label for="cena"></label>
 
    //  var audio = new Audio('rusbtaudio.mp3');
    //  audio.oncanplay = function() {
    //  if (document.getElementById("cena").checked) this.play()
    //  }
    //  function myfunction(el) {    
    //    if (el.checked) {
    //      audio.load();
    //    } else {
    //      audio.pause(); //pause audio
    //    }
     




//   var blueTitCheckbox = document.getElementById("blue-tit-checkbox");
//   var blueTitAudio = document.getElementById("blue-tit-audio");
  
//  function playBlueTitCall(){
//   blueTitAudio.play();
//  }
  
  

  






