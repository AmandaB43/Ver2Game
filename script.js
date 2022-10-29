var character = document.getElementById("character"); 
var block = document.getElementById("block");


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
            alert("You lost!");
        }
},10);
//Code belwo messed up jump funciton
//let counter = 30
/*function counter(){
setInterval(()=>{
        console.log(counter--)
        if (counter===0){
                clearInterval()
        }
}, 1000);
}*/
