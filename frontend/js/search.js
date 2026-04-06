document.addEventListener("DOMContentLoaded", () => {
  console.log("JS cargado");

  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');

  //console.log(searchButton, searchInput);
  console.log("Botón:", searchButton);
  console.log("Input:", searchInput);

  searchButton.addEventListener('click', () => {
    //lert("Click funcionando");
    console.log("CLICK DETECTADO");
    alert(searchInput.value);
  });
});

