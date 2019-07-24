let math_input = document.getElementById("math-input");
let display = document.getElementById("math-display");
math_input.value = "";
console.log("here");
math_input.oninput = function () {
    display.innerHTML = "";
    let value = math_input.value;
    let parsed = value.split('\n');
    parsed.forEach((element) => {
        display.innerHTML += "<p>$$" + element + "$$</p>";
    });

    MathJax.Hub.Queue(["Typeset", MathJax.Hub, display]);
};