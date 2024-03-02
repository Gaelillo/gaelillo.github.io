// Establecer titulo
lessonName = "Ejemplo";
document.getElementById('title').append(lessonName);

// Establecer ejercicio inicial
document.getElementById('textoTraducir').textContent = "Escribir 'hola'";
rightAnswer = "hola";

// Cambiar ejercicio al tener respuestas correctas
document.getElementById('textForm').addEventListener('submit', function(event) {
    switch (exerciseNumber) {    
    case 1:
        document.getElementById('textoTraducir').textContent = "Escribir 'hola'";
        rightAnswer = "hola";
        break;
    case 2:
        document.getElementById('textoTraducir').textContent = "Escribir 'adios'";
        rightAnswer = "adios";
        break;
    case 3:
        document.getElementById('textoTraducir').textContent = "Escribir 'causa'";
        rightAnswer = "causa";
        break;
    }

})