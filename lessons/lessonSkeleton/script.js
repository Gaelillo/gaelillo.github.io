// Cambiar titulo de acuerdo a la leccion
var lessonName = "null";

// Comportamiento de las preguntas
var rightAnswer = "null";
var exerciseNumber = 1;

document.getElementById('textForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let answer = (document.getElementById('textInput').value).toLowerCase();

    if (answer === rightAnswer) {
        document.getElementById('check').style.backgroundColor = '#C1F2B0';
        exerciseNumber++;
        document.getElementById('textInput').value = "";
    } else if (answer === "hola causa") {
        window.location.href = '../../images/skill_issue.gif';
    } else {
        document.getElementById('check').style.backgroundColor = '#f2b9b0'
    }
});

document.getElementById('textInput').addEventListener('input', function() {
    if (document.getElementById('textInput').value != '') {
        document.getElementById('check').style.backgroundColor = '#fdd898';
    } else {
        document.getElementById('check').style.backgroundColor = '#e1e1e1';
    }
});