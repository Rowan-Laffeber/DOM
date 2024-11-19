document.getElementById('color-random').addEventListener('click', function() { 
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); 
    document.getElementById('header').style.color = randomColor; 
}); 
function color_red() {
    let header = document.getElementById("header");
    header.style.color = "red";
}
function why_unique_id() {
    var x = document.getElementById("header");
    if (x.innerHTML === "DOM opdracht") {
      x.innerHTML = "Een id mag maar 1 keer per pagina voorkomen, omdat deze wordt gebruikt in een ander bestand. als deze op meerdere attributen wordt gezet wordt het script ook op al die attrbuten toegepast. Dit is handig voor de duidelijkheid in de code";
    } else {
      x.innerHTML = "DOM opdracht";
    }
  }