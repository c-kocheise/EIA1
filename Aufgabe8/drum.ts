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

    document.querySelector(".sound1").addEventListener("click", function(): void {
        playSample(0);
        recbeat(0);
        });

    document.querySelector(".sound2").addEventListener("click", function(): void {
        playSample(1);
        recbeat(1);
        });

    document.querySelector(".sound3").addEventListener("click", function(): void {
        playSample(2);
        recbeat(2);
        });
        
    document.querySelector(".sound4").addEventListener("click", function(): void {
        playSample(3);
        recbeat(3);
        });

    document.querySelector(".sound5").addEventListener("click", function(): void {
        playSample(4);
        recbeat(4);
        });

    document.querySelector(".sound6").addEventListener("click", function(): void {
        playSample(5);
        recbeat(5);
        });

    document.querySelector(".sound7").addEventListener("click", function(): void {
        playSample(6);
        recbeat(6);
        });

    document.querySelector(".sound8").addEventListener("click", function(): void {
        playSample(7);
        recbeat(7);
        });

    document.querySelector(".sound9").addEventListener("click", function(): void {
        playSample(8);
        recbeat(8);
        });



//Funktion für DrumPads

    function playSample(i: number): void {
        drumPad[i].play();
    }


   //Variabeln Aufnehmen und Löschen
   
   let trash: HTMLElement = document.querySelector(".fa-trash-alt");
   let recbutton: HTMLElement = document.querySelector(".fa-microphone");
   
   let beat: number [] = [];
   let abfrage: boolean;
   

   // Funktion & Variablen Abspielen und Pause
   
   let playButton: HTMLElement = document.querySelector(".fa-play");
   let pauseButton: HTMLElement = document.querySelector(".fa-stop");
   
   let myInterval: number;    
   let x: number = 0;


//Eventlistener PlayButton, PauseButton

playButton.addEventListener("click", () => {
    playSchleife(true);
    playButton.classList.add("inactive");
    pauseButton.classList.remove("inactive"); 
});

pauseButton.addEventListener("click", () => {
    playSchleife(false);
    pauseButton.classList.add("inactive");
    playButton.classList.remove("inactive");
});

     //Eventlistener Aufnehmen und Löschen
     recbutton.addEventListener("click", () => {
        if (recbutton.classList.contains("active")) {
            recbutton.classList.remove("active");
            abfrage = false;
        }
        else {
            recbutton.classList.add("active");
            abfrage = true;
        }
    });

    trash.addEventListener("click", () => {
        beat.splice(0, beat.length);
    });
    

//Aufnahme
function recbeat (i: number): void   {
    if (abfrage == true) {
        beat.push(i);
    }
}

    //Funktion PlayButton, PauseButton
    function playSchleife (b: boolean): void {
        if (b == true) {      
            myInterval = setInterval(function (): void  {               
                if (x < beat.length) {
                    playSample(beat[x]);
                    x++;
                }
                else {
                    x = 0;
                }
            }, 500 );
        }
        else {
            clearInterval(myInterval);
        }
    }