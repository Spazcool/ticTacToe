$(document).ready(function() {
    var counter = 0,
        character = "X",
        playedCells = [],
        xPlayedCells = [],
        oPlayedCells = [],
        availableCells = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        winningSequences = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],

            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],

            [1, 5, 9],
            [3, 5, 7]
        ],
        aiPrimarySequence = [1, 3, 7, 9],
        aiSecondarySequence = [2, 4, 6, 8];

    //STYLE SET UP
    $(".banner").hide();
    document.getElementById(character).style.cssText = "background-color: #FC1501; color: #5C5C5C";

    //STYLE BUTTON FOR THE CHOICE
    function characterChoice(choice) {
        character = choice;
        document.getElementById("X").style.cssText = "background-color: #800000; color: black;";
        document.getElementById("O").style.cssText = "background-color: #800000; color: black;";
        document.getElementById(choice).style.cssText = "background-color: #FC1501; color: #5C5C5C";
    }


    //RANDOMLY SELECT A NUM IN A RANGE
    function randoCell(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function playedOrAvailable() {
        playedCells = [];
        xPlayedCells = [];
        oPlayedCells = [];
        //WHICH CELLS HAVE OR HAVENT BEEN PLAYED
        for (var p = 1; p < 10; p++) {
            if (document.getElementById(p).innerHTML !== "") {
                if (document.getElementById(p).innerHTML === "X") {
                    xPlayedCells.push(p);
                } else {
                    oPlayedCells.push(p);
                }
                playedCells.push(p);
                //LOOP THROUGH playedCells AND - THE nums FROM availableCells
                for (var a = 0; a < playedCells.length; a++) {
                    for (var d = 0; d < availableCells.length; d++) {
                        if (playedCells[a] === availableCells[d]) {
                            availableCells.splice(d, 1);
                        }
                    }
                } }
        }
        return availableCells;
    }

    function aiMoves(XorO) {
        //GRAB THE CENTER IF ITS FREE
        if (document.getElementById("5").innerHTML === "") {
            document.getElementById("5").innerHTML = XorO;
            //IF CENTER IS NOT FREE
        } else if (document.getElementById("5").innerHTML !== "") {
            //IF l IN aiPrimarySequence IS ALSO IN playedCells POP IT OUT OF THE PRIMARY SEQUENCE THEN RANDOMLY SELECT FROM WHAT IS LEFT
            for (var l = 0; l < aiPrimarySequence.length; l++) {
                for (var w = 0; w < playedCells.length; w++) {
                    if (aiPrimarySequence[l] === playedCells[w]) {
                        aiPrimarySequence.splice(l, 1);
                    }
                }
            }
            //IF THERE REMAIN CELLS IN THE aiPrimarySequence GRAB EM, TAKE THE CORNERS
            if (aiPrimarySequence.length > 0) {
                document.getElementById(aiPrimarySequence[randoCell(0, aiPrimarySequence.length)]).innerHTML = XorO;
                //ELSE GRAB AT RANDOM
            } else {
console.log("playedCells: ", playedCells, " || xPlayedCells: ", xPlayedCells, " || oPlayedCells: ", oPlayedCells);
            }
        }
        return availableCells;
    };

    function aiMoves(XorO) {
        //GRAB THE CENTER IF ITS FREE
        if (document.getElementById("5").innerHTML === "") {
            document.getElementById("5").innerHTML = XorO;
            //IF CENTER IS NOT FREE
        } else if (document.getElementById("5").innerHTML !== "") {
            //IF l IN PRIMARY SEQUENCE IS ALSO IN playedCells POP IT OUT OF THE PRIMARY SEQUENCE THEN RANDOMLY SELECT FROM WHAT IS LEFT
            for (var l = 0; l < aiPrimarySequence.length; l++) {
                for (var w = 0; w < playedCells.length; w++) {
                    if (aiPrimarySequence[l] === playedCells[w]) {
                        aiPrimarySequence.splice(l, 1);
                    }
                }
            }
            //IF THERE REMAIN CELLS IN THE aiPrimarySequence GRAB EM
            if (aiPrimarySequence.length > 0) {
                document.getElementById(aiPrimarySequence[randoCell(0, aiPrimarySequence.length)]).innerHTML = XorO;
                //ELSE GRAB AT RANDOM
            } else {
                
                document.getElementById(availableCells[randoCell(0, availableCells.length)]).innerHTML = XorO;
            }
        }
        didWhoWin(XorO);

    }

    };


    function aiCharater() {
        playedOrAvailable();
        if (character === "X") {
            aiMoves("O");
        } else {
            aiMoves("X");
        }

    }

    //CHECK IF THERES A WINNING STREAK
    function didWhoWin(who) {
        function bannerAppend() {
            $("#banner").html(who + " won!");
            $(".banner").slideToggle(400);

        }

        for (var s = 0; s < winningSequences.length; s++) {
            if (document.getElementById(winningSequences[s][0]).innerHTML === who && document.getElementById(winningSequences[s][1]).innerHTML === who && document.getElementById(winningSequences[s][2]).innerHTML === who) {
                bannerAppend();
                return true;
            }
        }
        gameOverCheck();
        return false;

    }

    //IF THERES A DRAW
    function gameOverCheck(cat) {
        counter += 1;

        if (counter >= 9) {

        //IF ALL ARE CHECKED
        if (counter >= 9) {
            $("#banner").html("Draw!");
            $(".banner").slideToggle(400);
            return true;
        } else {
            return false;
        }
    }

    //RESET FOR A NEW GAME
    function reset() {

    };

    function reset() {
        $(".cell").html("");
        document.getElementById("X").style.cssText = "background-color: #800000; color: black;";
        document.getElementById("O").style.cssText = "background-color: #800000; color: black;";
        document.getElementById(character).style.cssText = "background-color: #FC1501; color: #5C5C5C";
        playedCells = [];
        xPlayedCells = [];
        oPlayedCells = [];
        availableCells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        aiPrimarySequence = [1, 3, 7, 9];
        counter = 0;
        $(".banner").slideToggle(400);
    }

    //STARTS HERE WITH THE INPUTS

    $(".cell").click(function() {
        //CHECK IF THE CELL IS AVAILABLE
        if ($(this).html() !== "") {} else {

    };

    //STARTS HERE WITH THE INPUTS
    $(".cell").click(function() {
        //CHECK IF THE CELL IS AVAILABLE
        if ($(this).html() !== "") {
   
        } else {
            $(this).html(character);
            if (didWhoWin(character) === false) {
                aiCharater();
            }
        }
    });

    $("#reset").click(function() {
        reset();
    });

    $(".xORo").click(function() {
        if (counter < 1) {
            characterChoice(this.id);
            if (this.id === "O") {
                aiCharater();
            }
        }
    });
});
