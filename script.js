var character = document.getElementById("character"); 
var block = document.getElementById("block");
var lost = document.getElementById("Lost");

function jump(){
   if(character.classList.add !="animate") {
    character.classList.add("animate") ;
   }
   setTimeout(function() {
    character.classList.remove("animate") ;
   } ,500 );
}

var checkDead = setInterval (function () {
        var characterTop =
                parseInt (window.getComputedStyle(character).getPropertyValue("top"));
         var blockLeft =
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130) {
            block.style.animation = "none" ;
            block.style.display = "none" ;
            document.getElementById('lost').innerHTML = "You lose!";
        }
},10);

//Code below is for restart button
function restart(){
      window.location.reload();
        }
