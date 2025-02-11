const sobre = document.querySelector("#about");
const formulario = document.querySelector("#formulario");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub(){
    try{
        const dadosPerfil = await fetch(`https://api.github.com/users/ZarathosFreya`);
        const perfil = await dadosPerfil.json();

        let conteudo = `
        
        <article id="home_imagem" class="about_content">
            <img 
            src="${perfil.avatar_url}" 
            alt="Foto do Perfil do GitHub - ${perfil.nome}"
            >
            </article>
            <article id="about_texto" class="flex home_content">
                <h1>Sobre mim</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae tempore consectetur laboriosam qui
                    amet voluptates eius dolores architecto, ad, quidem accusamus laborum maiores, odio quod commodi
                    quam debitis officia quo.</p>

                <div id="about_github" class="sobre_github">
                    <a href="${perfil.html_url}" target="_blank" class="botao">
                        GitHub
                    </a>
                    <p>${perfil.followers} Seguidores</p>
                    <p>${perfil.public_repos} Repositórios</p>

                </div>
            </article>
        `;
        console.log(conteudo);
        sobre.innerHTML += conteudo;
    }catch(error){
        console.error(error);
    }
}

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const campoNome = document.querySelector("#nome");
    const txtNome = document.querySelector("#txtNome");

    if(campoNome.value.length < 3){
        txtNome.innerHTML = "O nome deve ter no mínimo 3 caracteres.";
        campoNome.focus();
        return;
    }else{
        txtNome.innerHTML = "";
    }

    const campoEmail = document.querySelector("#email");
    const txtEmail = document.querySelector("#txtEmail");

    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = "Digite um e-mail válido.";
        campoEmail.focus();
        return;
    }else{
        txtEmail.innerHTML = "";
    }

    const campoAssunto = document.querySelector("#assunto");
    const txtAssunto = document.querySelector("#txtAssunto");

    if(campoAssunto.value.length < 5){
        txtAssunto.innerHTML = "O assunto deve ter no mínimo 5 caracteres";
        campoAssunto.focus();
        return;
    }else{
        txtAssunto.innerHTML = "";
    }

    formulario.submit();
})

getApiGithub();