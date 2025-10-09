const button = document.querySelector("button")
const main = document.querySelector("main")
button.addEventListener("click", buscarInformacaoNoBackend)

async function buscarInformacaoNoBackend() {
    const persons = await fetch("http://localhost:3333").then((response) => response.json())
    persons.map((person) => {
        main.innerHTML += `
            <section>
                <h2>Nome: ${person.name}</h2>
                <h3>Apelido: ${person.nickname}</h3>
                <h3>Idade: ${person.age} anos</h3>
                <h3>E-mail: ${person.email}</h3>
            </section>
            <hr>
        `
    })
}