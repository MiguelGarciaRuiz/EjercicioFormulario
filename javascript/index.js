window.addEventListener("load", function () {
    let inputUser = document.getElementsByClassName("input")[0]
    let inputPass = document.getElementsByClassName("input")[1]
    let labelUser = document.getElementsByClassName("label")[0]
    let labelPass = document.getElementsByClassName("label")[1]

    let loginForm = document.getElementById("loginForm")

    inputUser.addEventListener("focus", function () {
        labelUser.style.top = "0px"
    })
    labelUser.addEventListener("click", function () {
        labelUser.style.top = "0px"
    })
    inputPass.addEventListener("focus", function () {
        labelPass.style.top = "0px"
    })
    labelPass.addEventListener("click", function () {
        labelPass.style.top = "0px"
    })

    let user = "Miguel"
    let pass = "master"
    
    let error = document.getElementById("error");
    let message = document.getElementById("message");

    loginForm.addEventListener("submit", (submit) => {
        submit.preventDefault()
        if (inputUser.value === user && inputPass.value === pass) {
            message.innerHTML = "Bienvenido " + inputUser.value

            error.style.opacity = "1"
            error.style.transform = "translateY(20px)"
            error.style.border = "2px solid green"
            error.style.backgroundColor = "rgb(27, 157, 27)"

            console.log("Estás logueado!!!")
        } else {
            message.innerHTML = "Usuario o contraseña incorrectos"

            error.style.opacity = "1"
            error.style.transform = "translateY(20px)"
            error.style.border = "2px solid red"
            error.style.backgroundColor = "rgb(255, 63, 63)"

            inputUser.value = ""
            inputPass.value = ""

            console.error("El usuario o la contraseña son incorrectos")
        }

        setTimeout(() => {
            error.style.opacity = "0"
            error.style.transform = "translateY(70px)"
        }, 5000);

    })



})