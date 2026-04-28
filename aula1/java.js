function somar() {
    var n1 = document.getElementById('n1').valueAsNumber
    var n2 = document.getElementById('n2').valueAsNumber
    var res = document.getElementById('resposta')
    res.textContent = n1 + n2
}

function sub() {
    var f1 = document.getElementById('f1').valueAsNumber
    var f2 = document.getElementById('f2').valueAsNumber
    var res = document.getElementById('resposta1')
    res.textContent = f1 - f2
}

function mult() {
    var g1 = document.getElementById('g1').valueAsNumber
    var g2 = document.getElementById('g2').valueAsNumber
    var res = document.getElementById('resposta2')
    res.textContent = g1 * g2
}

function divsa() {
    var d1 = document.getElementById('d1').valueAsNumber
    var d2 = document.getElementById('d2').valueAsNumber
    var res = document.getElementById('resposta3')
    res.textContent = d1 / d2
}