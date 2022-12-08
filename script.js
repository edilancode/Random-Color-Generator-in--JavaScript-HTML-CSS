// gatting elements
const container = document.querySelector(".container");
const body = document.querySelector("body");
const input = document.querySelector(".input");
const title = document.querySelector("h1");
const label = document.querySelector("label")


    //loop to dynamiclly create elements 
    for (let index = 0; index < 30; index++) {
        const colorContainer = document.createElement("div");
        colorContainer.classList.add("color-container");
        container.appendChild(colorContainer);
}

const colorContainerEls = document.querySelectorAll(".color-container");
generateColors()

function generateColors() {
    colorContainerEls.forEach((colorContainerEls) => {
        const newColorCode = radomColor();
        colorContainerEls.style.backgroundColor = "#" + newColorCode;
        colorContainerEls.innerText = "#" + newColorCode;

    });
}
function radomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLenght = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLenght; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
        return colorCode;
}

  //dark mode code using local storage
input.addEventListener("click", () => {
    body.classList.toggle("dark");
    title.classList.add("titleDark");
    
    if (!body.classList.contains("dark")) {
        title.classList.add("titleLight"); 
        return localStorage.setItem("mode", "light");
        
    } 
       localStorage.setItem("mode", "dark");
});

const getMode = localStorage.getItem("mode");
    
    if (getMode && getMode === "dark") {
        body.classList.add("dark")
        
    }

   

