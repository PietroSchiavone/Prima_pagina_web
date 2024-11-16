document.getElementById("menu-button").addEventListener("click", addMenuClass);

function addMenuClass() {
    
    var header = document.getElementById("main-header");

    header.classList.toggle("is-open")

    document.documentElement.classList.toggle("no-scroll")
    
}