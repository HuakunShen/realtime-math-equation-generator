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
    document.getElementById("math-display").style.backgroundColor = event.target.value;
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


function takeScreenshot() {
    const display = document.getElementById("math-display");
    // const display = document.getElementsByClassName("container")[0];
    const canvas_width = document.body.offsetWidth;
    html2canvas(document.body, {
        x: document.getElementsByClassName("container")[0].offsetLeft * 0.9,
        // width: canvas_width - document.getElementsByClassName("container")[0].offsetWidth,
        width: document.getElementsByClassName("container")[0].offsetWidth * 1.1,
        // scrollX: 1000
    }).then(function (canvas) {
        const container = document.getElementsByClassName("modal-body")[0];
        Array.from(container.children).forEach(element => {
            element.remove();
        });
        container.appendChild(canvas);
    });
}