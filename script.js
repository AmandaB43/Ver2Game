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
            lost.style.display = "";
        }
},10);
//Code below is a test that isnt working. No display to show win or loss
/*function display(){
if (checkDead() === true)   {
        document.getElementById("Lost").style.display = 'block';
        document.getElementById("Lost").style.display = 'none';
        }
else    {
        document.getElementById("Win").style.display ='block';
        document.getElementById("Win").style.display ='none';
        }
}*/