

var turn = 0;
var word = document.getElementById("colorgen");


    

$(function(){
    $("button").on({
        mouseover:function(){
            switch(turn){
                case 0:
                word.textContent = "Catch me if u can!"
                break;
            
                case 1:
                word.textContent = "U can never catch this!"
                break;
                
                case 2:
                word.textContent = "Catch me if u can!"
                break;
                
                case 3:
                word.textContent = "Catch me if u can!"
                break;
            
                case 4:
                word.textContent = "Catch me if u can!"
                break;
            
                case 5:
                word.textContent = "U can never catch this!"
                break;
            
                case 6:
                word.textContent = "Catch me if u can!"
                break;
            
                case 7:
                word.textContent = "Catch me if u can!"
                break;
            
                case 8:
                word.textContent = "Catch me if u can!"
                break;
            
                case 9:
                word.textContent = "Catch me if u can!"
                break;
            
                case 10:
                word.textContent = "U can never catch this!"
                break;
            
                case 11:
                word.textContent = "Catch me if u can!"
                break;
            
                case 12:
                word.textContent = "Catch me if u can!"
                break;
            
                case 13:
                word.textContent = "Seems like you can't do it (-_-')"
                break;
            
                case 14:
                word.textContent = "So i would suggest to stop trying"
                break;
            
                case 15:
                word.textContent = "I'll be honest it's not easy"
                break;
            
                case 16:
                word.textContent = "but i really tought u could do it"
                break;
            
                case 17:
                word.textContent = "guess i overestamated your skills"
                break;
            
                case 18:
                word.textContent = "just close the site you can't do it!"
                break;
            
                case 19:
                word.textContent = "you a stubborn person"
                break;
            
                case 20:
                word.textContent = "Noob"
                break;
            
                case 21:
                word.textContent = "NooB"
                break;
            
                case 22:
                word.textContent = "NOOB"
                break;
            
                case 23:
                word.textContent = "N00B"
                break;
            
                case 24:
                word.textContent = "to be or not to be a failiure"
                break;
            }

            turn++;

            $(this).css({
                left:(Math.random()*820)+"px",
                top:(Math.random()*320)+"px",
            });
        }
    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function setRandomColor() {
    $("#colorgen").css("background-color", getRandomColor());
    $("#colorgen").css("color", getRandomColor());
  }
