const $modal = document.getElementById("container__modal");
const $btnAbrir = document.getElementById("abrir");
const $btnCerrar = document.getElementById("cerrar");

$btnAbrir.addEventListener("click", () => {
    $modal.classList.add("mostrar")
})

$btnCerrar.addEventListener("click", () => {
    $modal.classList.remove("mostrar")
})