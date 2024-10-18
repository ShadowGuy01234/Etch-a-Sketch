// function colorOnClick() {
//     document.addEventListener("DOMContentLoaded", ()=> {
//         let divs = document.querySelectorAll(".div");
//         divs.forEach((div) => {
//             div.addEventListener("click", () => {
//                 div.style.backgroundColor = "aqua";
//             });
//         });
//     });
// }



// function randomColorOnClick() {
//     document.addEventListener("DOMContentLoaded", () => {
//         let divs = document.querySelectorAll(".div");
//         divs.forEach((div) => {
//             let randomColor = colors[(Math.floor(Math.random() * colors.length))];
//             div.addEventListener("click", () => {
//                 div.style.backgroundColor = randomColor;
//             });
//         });
//     });
// }



let colors = [
    '#a52a2a', '#dcae96', '#800000', '#b03060', '#8b3a62', '#800020', '#fff4db', 
    '#789868', '#696ac9', '#e6c986', '#1e203b', '#b52e25', '#2c2d61', 
    '#639867', '#a9c77e', '#c4dd68', '#0dc681', '#ff3f31', '#ffa3da', '#fd71c5', 
    '#ff009a', '#008f51', '#232256', '#852679', '#2d712c', '#5d3526', 
    '#ccab8a', '#ecbf7b', '#d7b694', '#eeeccc', '#c5b77b', '#5f7e61', '#b64040', 
    '#e1dfdf','#668c6f', '#e5d5bb','#c46316', '#da413c','#5b2c34', '#c8a2c8', '#8fb0a9',
];


function randomColorOnHover() {
        let divs = document.querySelectorAll(".div");
        divs.forEach((div) => {
            let randomColor = colors[(Math.floor(Math.random() * colors.length))];
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = randomColor;
            });
        });
    };


function colorOnHover() {
        let divs = document.querySelectorAll(".div");
        divs.forEach((div) => {
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = "aqua";
            });
        });
    };



function grid() {
    document.addEventListener("DOMContentLoaded", () => {
        const canvas = document.querySelector(".canvas");
        let valueDisplay = document.querySelector(".sizeValue");
        let btn = document.querySelector(".btnSize");
        let newSize = document.querySelector(".size");
        newSize.addEventListener("input", () => {
            valueDisplay.innerHTML = `${ newSize.value}x${ newSize.value}`;
        });
        btn.addEventListener("click", () => {
        let gridSize = parseInt(newSize.value);
        canvas.innerHTML = '';
        for(let i = 0; i < gridSize; i++) {
            let newDiv = document.createElement("div");
            for (let j = 0; j < gridSize; j++) {
                let div = document.createElement(`div`);
                div.classList.add("div");
                newDiv.appendChild(div);
            }
            canvas.appendChild(newDiv);
        }
        colorOnHover();
        // randomColorOnHover();
        })
    });
}


grid();
// colorOnHover();
// randomColorOnHover();