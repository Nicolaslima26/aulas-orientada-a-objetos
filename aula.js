const btn = document.querySelector(".btn");

btn.addEventListener("click", () =>{
    const user = document.querySelector(".usuario").value;
    const password = document.querySelector(".senha").value;
    const alerta = document.querySelector(".alerta");
    if (user == "" || password == ""){
        alert('usuário/senha são obrigatórios')
    } else{
        if (user == "nicolas" && password == "nicolas"){
            alert("bem vindo " + user);
        } else{
            alert("usuário/senha incorretos")
        }

    }
})
