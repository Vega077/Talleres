const initialFontSizes = {
    h1: 32,
    h2: 28,
    h3: 24,
    h4: 20
};
let currentFontSizes = { ...initialFontSizes };

// Botones para aumentar y disminuir el tamaño de texto
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

// Función para ajustar el tamaño de los títulos
function adjustFontSize(change) {
    Object.keys(currentFontSizes).forEach(tag => {
        currentFontSizes[tag] += change;
        document.querySelector(tag).style.fontSize = currentFontSizes[tag] + 'px';
    });
}

// Para aumentar el tamaño
increaseBtn.addEventListener('click', () => {
    adjustFontSize(2);
});

// Para disminuir el tamaño
decreaseBtn.addEventListener('click', () => {
    if (
        currentFontSizes.h1 > initialFontSizes.h1 &&
        currentFontSizes.h2 > initialFontSizes.h2 &&
        currentFontSizes.h3 > initialFontSizes.h3 &&
        currentFontSizes.h4 > initialFontSizes.h4
    ){
        adjustFontSize(-2); // Evita reducir más allá del tamaño inicial
    }
});