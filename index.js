// 1. wait until DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log('App iniciada');
  
    // 2. initialize components
    initButtons();
    loadData();
  });
  
  // 3. main funcions
  function initButtons() {
    const button = document.querySelector('#myButton');
    button.addEventListener('click', () => {
      alert('Botón clickeado!');
    });
  }
  
  function loadData() {
    // Example: Fetch API to load data
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => console.log(data));
  }