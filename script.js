
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector(".canvas");
    for(let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let div = document.createElement(`div${i}`);
            div.classList.add("grid");
            canvas.appendChild(div, {i});
        }
        // TODO: figure out a way to get these divs inside a div

        // let newDiv = document.createElement("div");
        // canvas.appendChild(newDiv);
        
    }
});