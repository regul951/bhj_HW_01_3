let dead = document.getElementById('dead');
let lost = document.getElementById('lost');


//  Без цикла
// onclick = () => {
//     if (event.target.classList.contains('hole_has-mole')) {
//         dead.textContent++;
//         if (Number(dead.textContent) === 10) {
//             alert('Вы победили!');
//             dead.textContent = 0;
//             lost.textContent = 0;
//         }
//     } else if (event.target.classList.contains('hole')) {
//         lost.textContent++;
//         if (Number(lost.textContent) === 5) {
//             alert('Вы проиграли!');
//             dead.textContent = 0;
//             lost.textContent = 0;
//         }
//     }
// }



//  С циклом
for (let index = 1; index <= 9; index++) {

    let hole = document.getElementById(`hole${index}`);

    hole.onclick = () => {
        if (hole.className.includes("hole_has-mole")) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }

        if (Number(dead.textContent) === 10) {
            alert("Вы победили!");
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (Number(lost.textContent) === 5) {
            alert("Вы проиграли");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}
