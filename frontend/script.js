const button = document.querySelector("button")
const main = document.querySelector("main")
button.addEventListener("click", searchKrakens)

async function searchKrakens() {
    const persons = await fetch("http://localhost:5000").then(Response => Response.json())

    persons.map((persons, index) => {
        main.innerHTML += `
        <section>
            <h1>Nome: ${persons.name}</h1>
            <p>E-mail: ${persons.email}</p>
            <p>Idade: ${persons.age}</p>
            <p>Apelido: ${persons.nickname}</p>
        </section>
        ${index + 1 === persons.length ? "" : "<hr>"}
        `
    })
}