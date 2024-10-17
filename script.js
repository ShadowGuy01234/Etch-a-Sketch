function colorOnClick() {
    document.addEventListener("DOMContentLoaded", ()=> {
        let divs = document.querySelectorAll(".div");
        divs.forEach((div) => {
            div.addEventListener("click", () => {
                div.style.backgroundColor = "aqua";
            });
        });
    });
}


function grid() {
    document.addEventListener("DOMContentLoaded", () => {
        // let n = prompt("Choose grid: ");
        const canvas = document.querySelector(".canvas");
        for(let i = 0; i < 16; i++) {
            let newDiv = document.createElement("div");
            for (let j = 0; j < 16; j++) {
                let div = document.createElement(`div`);
                div.classList.add("div");
                newDiv.appendChild(div);
            }
            canvas.appendChild(newDiv);
        }
    });
}

grid();
colorOnClick();