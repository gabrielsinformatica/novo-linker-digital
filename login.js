let botao = document.querySelector(".btn-submit");

botao.addEventListener("click", function() {
    let nomeUser = document.querySelector("#userName").value;
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;

    console.log(nomeUser, email, senha);

    let usuario1 = {
        nomeUser: "admin",
        email: "admin@linkerdigital.com",
        senha: "linkerdigital",
    }

    if(nomeUser === "" || email === "" || senha === "") {
        alert("Preencha os campos corretamente!");
        document.querySelector("#email").value = "";
        document.querySelector("#senha").value = "";
    } else if(usuario1.nomeUser === "admin" && usuario1.email === "admin@linkerdigital.com" && usuario1.senha === "linkerdigital") {
        document.querySelector("#sera").innerHTML = "Acesso permitido! <a href='painel.html'>Clique aqui</a> para acessar seu painel de controle!";
    }
});
