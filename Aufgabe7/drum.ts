//Drumpad Samples

    let drumPad = [];
    drumPad[0] = new Audio('drummedia/A.mp3');
    drumPad[1] = new Audio('drummedia/C.mp3');
    drumPad[2] = new Audio('drummedia/F.mp3');
    drumPad[3] = new Audio('drummedia/G.mp3');
    drumPad[4] = new Audio('drummedia/hihat.mp3');
    drumPad[5] = new Audio('drummedia/kick.mp3');
    drumPad[6] = new Audio('drummedia/laugh-1.mp3');
    drumPad[7] = new Audio('drummedia/laugh-2.mp3');
    drumPad[8] = new Audio('drummedia/snare.mp3');


//Eventlistener

    document.querySelector(".sound1").addEventListener("click", function(){
        playSample(0);
        });

    document.querySelector(".sound2").addEventListener("click", function(){
        playSample(1);
        });

    document.querySelector(".sound3").addEventListener("click", function(){
        playSample(2);
        });
        
    document.querySelector(".sound4").addEventListener("click", function(){
        playSample(3);
        });

    document.querySelector(".sound5").addEventListener("click", function(){
        playSample(4);
        });

    document.querySelector(".sound6").addEventListener("click", function(){
        playSample(5);
        });

    document.querySelector(".sound7").addEventListener("click", function(){
        playSample(6);
        });

    document.querySelector(".sound8").addEventListener("click", function(){
        playSample(7);
        });

    document.querySelector(".sound9").addEventListener("click", function(){
        playSample(8);
        });


        
// Funktion für DrumPads

    function playSample(i :number){
        drumPad[i].play();
    };