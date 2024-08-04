// $(document).ready(function () {
//     let currentPlayer = true;
//     let winnerPattern = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8]
//     ];
//     let box = $('.box').toArray();
//     let newgamebtn=$('#newbtn');
//     let msgcont=$('.msg-continer');
//     let message =$('#msg');

//     $('.box').click(function () {
//         console.log("Box was clicked");
//         if (currentPlayer) {
//             $(this).text("X");
//             currentPlayer = false;
//         } else {
//             $(this).text("O");
//             currentPlayer = true;
//         }

//         $(this).prop('disabled', true);
//         checkwinner();
//     });
//     // let disabledbox=()=>{
//     //     for (let box of boxes){
//     //         box.prop('disabled',true)

//     //     }
//     //     let enabledbox=()=>{
//     //         for (let box of boxes){
//     //             box.prop('disabled',true)
    
//     //         }

//     // }
//     let showwinner=(winner)=>{
//         msgcont.textContent=`congratulation winner is $(winner)`;
//         msgcont.removeClass("hide");

//     }
//     let checkwinner = () => {
//         for (let pattern of winnerPattern) {
//             let pos1 = $(boxes[pattern[0]]).text();
//             let pos2 = $(boxes[pattern[1]]).text();
//             let pos3 = $(boxes[pattern[2]]).text();

//             if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
//                 if (pos1 === pos2 && pos2 === pos3) {
//                     console.log("Winner:", pos1);
//                     showwinner(pos1);
//                 }
//             }
//         }
//     };
// });
