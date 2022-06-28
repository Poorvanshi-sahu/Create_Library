add = document.querySelector("#add")
popup = document.querySelector("#popup")
cross = document.querySelector("#cross")

add.addEventListener('click', () => {
    popup.style.display = "initial";
})


cross.addEventListener('click', () => {
    popup.style.display = "none";
})