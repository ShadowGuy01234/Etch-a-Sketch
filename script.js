

let colors = [
    '#a52a2a', '#dcae96', '#800000', '#b03060', '#8b3a62', '#800020', '#fff4db', 
    '#789868', '#696ac9', '#e6c986', '#1e203b', '#b52e25', '#2c2d61', 
    '#639867', '#a9c77e', '#c4dd68', '#0dc681', '#ff3f31', '#ffa3da', '#fd71c5', 
    '#ff009a', '#008f51', '#232256', '#852679', '#2d712c', '#5d3526', 
    '#ccab8a', '#ecbf7b', '#d7b694', '#eeeccc', '#c5b77b', '#5f7e61', '#b64040', 
    '#e1dfdf','#668c6f', '#e5d5bb','#c46316', '#da413c','#5b2c34', '#c8a2c8', '#8fb0a9',
];

document.addEventListener("DOMContentLoaded", () => {
    const color = document.querySelector(".btnColor"); 
    const randomColor = document.querySelector(".btnRandom"); 
    color.addEventListener("click", colorOnHover);
    randomColor.addEventListener("click", randomColorOnHover);
});

function clearHoverListeners() {
    const divs = document.querySelectorAll(".div");
    divs.forEach(div => {
        let newDiv = div.cloneNode(true);
        div.replaceWith(newDiv);
    });
};


function randomColorOnHover() {
        clearHoverListeners();

        let divs = document.querySelectorAll(".div");
        divs.forEach((div) => {
            div.addEventListener("mouseover", () => {
                let randomColor = colors[(Math.floor(Math.random() * colors.length))];
                div.style.backgroundColor = randomColor;
            });
        });
    };


function colorOnHover() {
        clearHoverListeners();
        let colorpicker = document.querySelector('.color');
        let color = colorpicker.value;
        let divs = document.querySelectorAll(".div");
        divs.forEach((div) => {
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = color;
            });
        });
    }


function grid() {
    document.addEventListener("DOMContentLoaded", () => {
        const canvas = document.querySelector(".canvas");
        let valueDisplay = document.querySelector(".sizeValue");
        let newSize = document.querySelector(".size");
        newSize.addEventListener("input", () => {
        valueDisplay.innerHTML = `${ newSize.value}x${ newSize.value}`;
        let gridSize = parseInt(newSize.value);
        let size =  500 / gridSize;
        canvas.innerHTML = '';
        for(let i = 1; i <= gridSize; i++) {
            let newDiv = document.createElement("div");
            for (let j = 1; j <= gridSize; j++) {
                let div = document.createElement(`div`);
                div.classList.add("div");
                div.style.width = `${size}px`;
                div.style.height = `${size}px`;
                newDiv.appendChild(div);
            }
            canvas.appendChild(newDiv);
        }
        });
    });
}



grid();
// colorOnHover();
// randomColorOnHover();