let count = 0;
    let increment = 1;

    const counterDisplay = document.getElementById('counterDisplay');
    const incrementButton = document.getElementById('incrementButton');

    incrementButton.addEventListener('click', () => {

      count += increment;
      
      counterDisplay.textContent = count;

      if (count % 5 === 0) {
        increment += 1;
      }

      // Deshabilita el botón cuando se llega a 100
      if (count >= 100) {
        incrementButton.disabled = true;
      }
    });