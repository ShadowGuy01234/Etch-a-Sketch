function colorOnClick() {
    document.addEventListener("DOMContentLoaded", ()=> {
        let grid = document.querySelector(".grid");
        grid.addEventListener("click", () => {
            grid.style.backgroundColor = "aqua";
        })
    });
}


function grid() {
    document.addEventListener("DOMContentLoaded", () => {
        // let n = prompt("Choose grid: ");
        const canvas = document.querySelector(".canvas");
        for(let i = 0; i < 3; i++) {
            let newDiv = document.createElement("div");
            for (let j = 0; j < 3; j++) {
                let div = document.createElement(`div`);
                div.classList.add("grid");
                newDiv.appendChild(div);
            }
            canvas.appendChild(newDiv);
        }
    });
}

grid();
colorOnClick();