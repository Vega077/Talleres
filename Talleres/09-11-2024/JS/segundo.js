const textInput = document.getElementById('textInput');
    
  textInput.addEventListener('blur', () => {

  textInput.value = textInput.value.toUpperCase();
  
});