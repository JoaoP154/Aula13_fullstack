const button = document.querySelector("button")
button.onclick = (event) => {
    event.preventDefault()
    singUpKrakens()
}


function singUpKrakens(){
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const age = document.querySelector("#age").value
    const nickname = document.querySelector("#nickname").value
    const password = document.querySelector("#password").value

    if(name === "" || email === "" || age === "" || password === "") {
        alert("PREENCHA TODAS AS INFORMAÇÕES, animal!")
        return
    }

    const user = {
        name,
        email,
        age,
        nickname,
        password
    }

    fetch("http://localhost:5000/cadastrar", {
        method:"post",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    })
}