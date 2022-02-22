var sumalikes = [9, 12, 9];
var suma = [
    document.querySelector("#sumalikes1"),
    document.querySelector("#sumalikes2"),
    document.querySelector("#sumalikes3")
];

function more(id) {
    sumalikes[id]++;
    suma[id].innerText = sumalikes[id];
}