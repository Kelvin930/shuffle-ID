// // example first box top left corner would be 0-0
// //the one after being 0-1
// var row = 0;
// var column = 0;
// var solvedWords;
// var gameOver = false;
// let words;
// var checkHowManyBoxSelected = 0;
// var moves = 15;

// var testing;

// var bootGameOrNot;

// var playerFinishedTheGame = false;

// var ipAddress;

// window.onload = function () {
//     drawBox();
// }


// function drawSolvedBox() {
//     //drawing 25 boxes
//     fetch("/solvedWords") //word from e
//         .then((response) => response.json())
//         .then((solvedWords) => {
//             data = solvedWords

//             for (let i = 0; i < 5; i++) {
//                 for (let j = 0; j < 5; j++) {
//                     let solvedbox = document.createElement("button");
//                     //span id going to be 0-0,0-1 etc
//                     solvedbox.id = i.toString() + "-" + j.toString();
//                     solvedbox.classList.add("solvedbox");

//                     // Add a class to the button
//                     solvedbox.classList.add("green-button");
//                     console.log(data);
//                     solvedbox.innerText = data[i][j]

//                     document.getElementById("solvedboard").appendChild(solvedbox);

//                 }
//             }


//         });

// }





// let firstSelectionBox = null;

// function swap(event) {
//     if (moves == 0) {

//         console.log("Sad to see");
//         remain_Time();
//         end_game();
//         drawSolvedBox();
//         sendIpAddressAfterFinishToController(ipAddress);
//         return;

//     }



//     if (firstSelectionBox == null) {
//         //event.target.style.border = 'white'; 
//         firstSelectionBox = event.target;
//         firstSelectionBox.style.fontSize = '4.0em';


//     }
//     else {
//         if (firstSelectionBox.id.charAt(2) === event.target.id.charAt(2)) {
//             temp = event.target.innerText;
//             moves--;
//             event.target.innerText = firstSelectionBox.innerText;
//             firstSelectionBox.innerText = temp;
//             firstSelectionBox.style.fontSize = '2.5em';
//             firstSelectionBox = null;
//             checkCorrectLetters();
//             document.getElementById('movesLeft').innerHTML = "Moves Left: " + moves;
//             console.log(moves)
//         }
//     }

// }



// function checkCorrectLetters() {
//     let win = true;
//     for (let i = 0; i < 5; i++) {
//         for (let j = 0; j < 5; j++) {
//             let box = document.getElementById(i.toString() + "-" + j.toString());
//             if (box.innerText.toLowerCase() == solvedWords[i][j]) {
//                 box.classList.add("right");
//                 box.disabled = true;
//             }
//             else {
//                 box.classList.remove("right");
//                 win = false;
//             }
//         }
//     }
//     if (win) {
//         console.log("You win")
//     }
// }

// function drawBox() {
//     //drawing 25 boxes
//     fetch("/words") //word from backend
//         .then((response) => response.json())
//         .then((shuffledWords) => {
//             words = shuffledWords

//             for (let i = 0; i < 5; i++) {
//                 for (let j = 0; j < 5; j++) {
//                     let box = document.createElement("button");
//                     //span id going to be 0-0,0-1 etc
//                     box.id = i.toString() + "-" + j.toString();
//                     box.classList.add("box");
//                     console.log(words);
//                     box.innerText = words[i][j]
//                     box.onclick = swap;
//                     document.getElementById("board").appendChild(box);

//                 }
//             }

//             fetch("/solvedWords")
//                 .then((response) => response.json())
//                 .then((data) => {
//                     solvedWords = data
//                     checkCorrectLetters();
//                 })
//         });

// } 