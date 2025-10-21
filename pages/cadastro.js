const button = document.querySelector("button")
button.onclick = (event) => {
    event.preventDefault()
    signUpUser()
}

async function signUpUser() {
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const nickname = document.querySelector("#nickname").value

    const user = {
        name,
        email,
        password,
        nickname
    }

    const response = await fetch("http://localhost:3333/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    }).then(response => response.json())

    alert(response.message)
}