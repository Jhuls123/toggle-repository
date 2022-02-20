const toggle = document.getElementById("checkbox");

toggle.addEventListener("click", () => {
    console.log(123)
    document.body.classList.toggle("dark")
})