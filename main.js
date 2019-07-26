let math_input = document.getElementById("math-input");
let display = document.getElementById("math-display");
math_input.value = "";
math_input.oninput = function () {
    display.innerHTML = "";
    let value = math_input.value;
    let parsed = value.split('\n');
    parsed.forEach((element) => {
        display.innerHTML += "<p>$$" + element + "$$</p>";
    });
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, display]);
};

document.getElementById("background-color").addEventListener('change', (event) => {
    document.body.style.backgroundColor = event.target.value;
});

document.getElementById("text-color").addEventListener('change', (event) => {
    $("h1")[0].style.color = event.target.value;
    $("#source-container")[0].style.color = event.target.value;
    $("#math-display")[0].style.color = event.target.value;
    $("#math-display")[0].style.borderColor = event.target.value;
    Array.from($("a")).forEach((a) => {
        a.style.color = event.target.value;
    });

});