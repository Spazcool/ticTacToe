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

<<<<<<< HEAD
    //STYLE BUTTON FOR THE CHOICE
=======
    //STYLING MOSTLY
>>>>>>> 8956d4d02fb18b1ed2e3ada7ecb4c9f4842cc311
    function characterChoice(choice) {
        character = choice;
        document.getElementById("X").style.cssText = "background-color: #800000; color: black;";
        document.getElementById("O").style.cssText = "background-color: #800000; color: black;";
        document.getElementById(choice).style.cssText = "background-color: #FC1501; color: #5C5C5C";
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 8956d4d02fb18b1ed2e3ada7ecb4c9f4842cc311

    //RANDOMLY SELECT A NUM IN A RANGE
    function randoCell(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 8956d4d02fb18b1ed2e3ada7ecb4c9f4842cc311

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
<<<<<<< HEAD
                //LOOP THROUGH playedCells AND - THE nums FROM availableCells
=======
                //loop through playedCells and subract the same nums from availableCells
>>>>>>> 8956d4d02fb18b1ed2e3ada7ecb4c9f4842cc311
                for (var a = 0; a < playedCells.length; a++) {
                    for (var d = 0; d < availableCells.length; d++) {
                        if (playedCells[a] === availableCells[d]) {
                            availableCells.splice(d, 1);
                        }
                    }
                }
<<<<<<< HEAD
                // console.log("playedCells: ", playedCells, " || xPlayedCells: ", xPlayedCells, " || oPlayedCells: ", oPlayedCells);
            }
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
=======
                // console.log(p, ": ", document.getElementById(p).innerHTML, " || playedCells: ", playedCells, " || availableCells: ", availableCells);
                console.log("playedCells: ", playedCells, " || xPlayedCells: ", xPlayedCells, " || oPlayedCells: ", oPlayedCells);
            }
        }
        return availableCells;
    };

    function aiMoves(XorO) {
        //MY LOGIC IS NOT FOLLOWING REALITY HERE, HOW DONE DO IT?
        //IF USER HAS 2/3 OF A SEQUENCE TAKE THE 1/3
        //if xPlayedCells has 2/3 of a winningSequences take the
        // for (var g = 0; g < xPlayedCells.length; g++) {
        //     for (var z = 0; z < winningSequences.length; z++) {
        //         if (xPlayedCells[g] === winningSequences[z][g]) {
        //             console.log("1 match");
        //             if (xPlayedCells[g + 1] === winningSequences[z + 1][g + 1]) {
        //                 console.log("xPlayedCells[g]: ", xPlayedCells[g], " || winningSequences[z][g]: ", winningSequences[z][g], " || xPlayedCells[g+1]: ", xPlayedCells[g + 1], " || winningSequences[z+1][g+1]: ", winningSequences[z + 1][g + 1]);
        //             }
        //         }
        //     }
        // }

        //GRAB THE CENTER IF ITS FREE
        if (document.getElementById("5").innerHTML === "") {
            console.log("AI TAKE 5");
            document.getElementById("5").innerHTML = XorO;
            //IF CENTER IS NOT FREE
        } else if (document.getElementById("5").innerHTML !== "") {
            console.log("AI 5 TAKEN");
            //IF l IN PRIMARY SEQUENCE IS ALSO IN playedCells POP IT OUT OF THE PRIMARY SEQUENCE THEN RANDOMLY SELECT FROM WHAT IS LEFT
            for (var l = 0; l < aiPrimarySequence.length; l++) {
                for (var w = 0; w < playedCells.length; w++) {
                    if (aiPrimarySequence[l] === playedCells[w]) {
                        // console.log(aiPrimarySequence[l], " || ", playedCells[w]);
                        aiPrimarySequence.splice(l, 1);
                        // console.log("aiPrimarySequence: ", aiPrimarySequence);
                    }
                }
            }
            //IF THERE REMAIN CELLS IN THE aiPrimarySequence GRAB EM
            if (aiPrimarySequence.length > 0) {
                console.log("AI TAKE CORNER");
                document.getElementById(aiPrimarySequence[randoCell(0, aiPrimarySequence.length)]).innerHTML = XorO;
                //ELSE GRAB AT RANDOM
            } else {
                console.log("AI TAKE RANDOM");
>>>>>>> 8956d4d02fb18b1ed2e3ada7ecb4c9f4842cc311
                document.getElementById(availableCells[randoCell(0, availableCells.length)]).innerHTML = XorO;
            }
        }
        didWhoWin(XorO);
<<<<<<< HEAD
    }

    //AI IS PLAYING AS X OR O
=======
        console.log("END: AI");
    };

>>>>>>> 8956d4d02fb18b1ed2e3ada7ecb4c9f4842cc311
    function aiCharater() {
        playedOrAvailable();
        if (character === "X") {
            aiMoves("O");
        } else {
            aiMoves("X");
        }
<<<<<<< HEAD
    }

    //CHECK IF THERES A WINNING STREAK
=======
    };

>>>>>>> 8956d4d02fb18b1ed2e3ada7ecb4c9f4842cc311
    function didWhoWin(who) {
        function bannerAppend() {
            $("#banner").html(who + " won!");
            $(".banner").slideToggle(400);
<<<<<<< HEAD
        }
=======
        };
>>>>>>> 8956d4d02fb18b1ed2e3ada7ecb4c9f4842cc311
        for (var s = 0; s < winningSequences.length; s++) {
            if (document.getElementById(winningSequences[s][0]).innerHTML === who && document.getElementById(winningSequences[s][1]).innerHTML === who && document.getElementById(winningSequences[s][2]).innerHTML === who) {
                bannerAppend();
                return true;
            }
        }
        gameOverCheck();
        return false;
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 8956d4d02fb18b1ed2e3ada7ecb4c9f4842cc311

    //IF THERES A DRAW
    function gameOverCheck(cat) {
        counter += 1;
<<<<<<< HEAD
        if (counter >= 9) {
=======
        // console.log("counter: " + counter);
        //IF ALL ARE CHECKED
        if (counter >= 9) {
            console.log("DRAW GAME OVER");
>>>>>>> 8956d4d02fb18b1ed2e3ada7ecb4c9f4842cc311
            $("#banner").html("Draw!");
            $(".banner").slideToggle(400);
            return true;
        } else {
            return false;
        }
<<<<<<< HEAD
    }

    //RESET FOR A NEW GAME
    function reset() {
=======
    };

    function reset() {
        console.log("NEW GAME");
>>>>>>> 8956d4d02fb18b1ed2e3ada7ecb4c9f4842cc311
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
<<<<<<< HEAD
    }

    //STARTS HERE WITH THE INPUTS

    $(".cell").click(function() {
        //CHECK IF THE CELL IS AVAILABLE
        if ($(this).html() !== "") {} else {
=======
    };

    //STARTS HERE WITH THE INPUTS
    $(".cell").click(function() {
        //MAKE THIS NOT WORK WHEN THE BANNER IS SHOWING
        //CHECK IF THE CELL IS AVAILABLE
        if ($(this).html() !== "") {
            // console.log("seats taken");
        } else {
>>>>>>> 8956d4d02fb18b1ed2e3ada7ecb4c9f4842cc311
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
