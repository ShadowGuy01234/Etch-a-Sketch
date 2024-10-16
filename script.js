
document.addEventListener("DOMContentLoaded", () => {
    // let n = prompt("Choose grid: ");
    const canvas = document.querySelector(".canvas");
    for(let i = 0; i < n; i++) {
        let newDiv = document.createElement("div");
        for (let j = 0; j < n; j++) {
            let div = document.createElement(`div${i}`);
            div.classList.add("grid");
            newDiv.appendChild(div, {i});
        }
        canvas.appendChild(newDiv);
    }
});