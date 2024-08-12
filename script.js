const btn = document.querySelector(".save");

btn.addEventListener("click", () =>{
    const usuario = document.querySelector(".user").value;
    const senha = document.querySelector(".senha").value;

    if(usuario == "" || senha == ""){
        alert("usuario ou senha são obrigatórios")
    } else{
        alert("Bem vindo ")
    }
})