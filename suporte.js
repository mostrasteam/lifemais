const chatInput= document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;


const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : ` <span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML =  chatContent;
    return chatLi;
}


const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

    

    switch(userMessage.toLowerCase()){
        case 'sugestão/reclamação':
            setTimeout(() =>{
                const incomingChatLI = createChatLi("Para que possa dar uma sugestão ou fazer uma reclamação:<br>1-Vá até o menu lateral<br>2-Clique em Sugestão<br>Nessa aba, você usuário poderá nos contar toda a sua experiência com o Life+", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;

            case 'sugestão':
            setTimeout(() =>{
                const incomingChatLI = createChatLi("Para que possa dar uma sugestão ou fazer uma reclamação:<br>1-Vá até o menu lateral<br>2-Clique em Sugestão<br>Nessa aba, você usuário poderá nos contar toda a sua experiência com o Life+", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;

            case 'reclamação':
            setTimeout(() =>{
                const incomingChatLI = createChatLi("Para que possa dar uma sugestão ou fazer uma reclamação:<br>1-Vá até o menu lateral<br>2-Clique em Sugestão<br>Nessa aba, você usuário poderá nos contar toda a sua experiência com o Life+", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;

            case 'sugestao/reclamaçao':
            setTimeout(() =>{
                const incomingChatLI = createChatLi("Para que possa dar uma sugestão ou fazer uma reclamação:<br>1-Vá até o menu lateral<br>2-Clique em Sugestão<br>Nessa aba, você usuário poderá nos contar toda a sua experiência com o Life+", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;

            case 'sugestao':
            setTimeout(() =>{
                const incomingChatLI = createChatLi("Para que possa dar uma sugestão ou fazer uma reclamação:<br>1-Vá até o menu lateral<br>2-Clique em Sugestão<br>Nessa aba, você usuário poderá nos contar toda a sua experiência com o Life+", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;

            case 'reclamaçao':
            setTimeout(() =>{
                const incomingChatLI = createChatLi("Para que possa dar uma sugestão ou fazer uma reclamação:<br>1-Vá até o menu lateral<br>2-Clique em Sugestão<br>Nessa aba, você usuário poderá nos contar toda a sua experiência com o Life+", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;

        case 'ajuda':
            setTimeout(() =>{
                const incomingChatLI = createChatLi("<b>Escolha um dos números, referente a pergunta desejada:</b><br><br>1-De que maneira esse site vai me ajudar?<br><br>2-Os filmes, séries e livros são gratuitos?<br><br>3-O usuário pode alterar os dados já cadastrados?<br><br>4-Para que serve a aba de exames?<br><br>5-Qual o objetivo da aba de lugares?<br><br>6-Para que serve o calendário, presente no menu?<br><br>7-Com qual objetivo tive que responder a criação de perfil?<br><br>8-Como posso ter acesso aos filmes, séries e livros indicados?<br><br>9-Os filmes, livros e séries são indicados em diferentes categorias?<br><br>10-Outra Pergunta", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;

            case '1':
            setTimeout(() =>{
                const incomingChatLI = createChatLi("<b>1-De que maneira esse site vai me ajudar?<br></b>Iremos ajudar com a sua rotina, fazendo com que seus dias sejam mais leves, além de ajudar a preservar a sua saúde física e mental.", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;

            case '2':
            setTimeout(() =>{
                const incomingChatLI = createChatLi("<b>2-Os filmes, séries e livros são gratuitos?</b><br>Não. Nós colocamos opções de filmes, séries e livros para você escolher de acordo com o seu gosto, mas todos estão disponíveis em plataformas pagas.", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;

            case '3':
            setTimeout(() =>{
                const incomingChatLI = createChatLi("<b>3-O usuário pode alterar os dados já cadastrados?</b><br>Não. As informações inseridas no momento do cadastro, são diretamente salvas em nosso banco de dados, não estando sujeita a alteração.", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;

            case '4':
            setTimeout(() =>{
                const incomingChatLI = createChatLi("<b>4-Para que serve a aba de exames?</b><br>A aba de exames serve para você, como usuário, poder organizar sua vida médica, definindo os dias e horários de consultas e exames, para que não corra o risco de esquecer do compromisso.", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;

            case '5':
            setTimeout(() =>{
                const incomingChatLI = createChatLi("<b>5-Qual o objetivo da aba de lugares?</b><br>A aba de lugares foi criada com o objetivo de sugerir a você, usuário, lugares para poder ir em seu tempo livre, tanto para se divertir e curtir o dia, quanto para se exercitar e manter sua saúde física ativa.", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;

            case '6':
            setTimeout(() =>{
                const incomingChatLI = createChatLi("<b>6-Para que serve o calendário, presente no menu?</b><br>O calendário serve para você, usuário, poder ter acesso a datas de maneira mais rápida e otimizada, não precisando procurar em outros sites ou aplicativos.", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;

            case '7':
            setTimeout(() =>{
                const incomingChatLI = createChatLi("<b>7-Com qual objetivo tive que responder a criação de perfil?</b><br>A criação de perfil foi criada com o objetivo de moldar o site de acordo com seus gostos e preferências. A partir do momento que a criação de perfil é realizada, o sistema se adequa ao que foi respondido por você, usuário.", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;

            case '8':
            setTimeout(() =>{
                const incomingChatLI = createChatLi("<b>8-Como posso ter acesso aos filmes, séries e livros indicados?</b><br>Quando você, usuário clica no filme, série ou livro desejado, o site já mostra a plataforma em que o mesmo está disponível. Quando clicar no ícone, você será redirecionado para página da plataforma selecionada.", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;

            case '9':
            setTimeout(() =>{
                const incomingChatLI = createChatLi("<b>9-Os filmes, livros e séries são indicados em diferentes categorias?</b><br>Sim. Com o intuito de englobar o máximo de pessoas possíveis e garantir maior integração, o site indica filmes, livros e séries em diferentes categorias, onde as preferências do usuário são informadas na criação de perfil.", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;

            case '10':
            setTimeout(() =>{
                const incomingChatLI = createChatLi("<b>10-Outra Pergunta</b><br>Caso a sua dúvida não seja nenhuma acima, você pode enviar uma mensagem para <b>lifeplus.vidamais@gmail.com</b>", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;

        default:
            setTimeout(() =>{
                const incomingChatLI = createChatLi("Desculpe, não entendi. Digite uma das opções disponibilizadas pelo bate-papo", "incoming")
                chatbox.appendChild(incomingChatLI);
                generateResponse(incomingChatLI);
            }, 600)
            chatInput.value = "";
            break;
    }
}


sendChatBtn.addEventListener("click", handleChat)