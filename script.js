const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ir à escola é fundamental para o desenvolvimento intelectual, social e emocional das crianças e adolescentes.",
        alternativas: [
            {
                texto: "fato",
                afirmacao: "Ir à escola é um fato porque é um direito garantido por lei na maioria dos países, sendo essencial para o aprendizado e o desenvolvimento social das crianças e adolescentes."
            },
            {
                texto: "opinião",
                afirmacao: "Não é uma opinião porque ir à escola é uma exigência legal em muitos países e é fundamental para o desenvolvimento de habilidades necessárias para a vida adulta, como alfabetização, raciocínio lógico e convivência social. Além disso, a educação formal é uma prática amplamente reconhecida como essencial para a formação dos indivíduos e a construção da sociedade."
            }
        ]
    },
    {
        enunciado: "Eu realmente acho que o purê de batata é um dos pratos mais reconfortantes que existem. A textura cremosa e a suavidade do sabor fazem com que seja um acompanhamento perfeito para muitos outros pratos, como carnes e aves. Além disso, ele tem uma versatilidade incrível, podendo ser adaptado com temperos variados ou até com ingredientes extras, como queijo, alho ou ervas. O purê é um daqueles pratos simples, mas que trazem uma sensação de acolhimento, como uma verdadeira comida de "casa". E, para mim, ele tem um toque especial quando feito com batatas bem amassadas e um pouco de manteiga, criando um sabor quase irresistível.",
        alternativas: [
            {
                texto: "fato"
                afirmacao: "Não é um fato porque o gosto por purê de batata é algo subjetivo e depende da percepção individual de cada pessoa. Fatos são informações objetivas que podem ser comprovadas ou verificadas por qualquer pessoa, independentemente da opinião pessoal. Já o prazer ou preferência por um alimento é uma questão de gosto, o que significa que pode variar de uma pessoa para outra. Portanto, afirmar que purê de batata é delicioso não é algo que possa ser universalmente comprovado como verdadeiro para todos.




Perguntar ao ChatGPT
"
            },
            {
                texto: "opinião"
                afirmacao: "Dizer que gostar de purê de batata é uma opinião porque o gosto por ele varia de pessoa para pessoa. O que pode ser delicioso e reconfortante para uma pessoa, pode não ser para outra. Cada indivíduo tem suas próprias preferências alimentares, e o que agrada a um pode não agradar a outro, tornando essa avaliação algo subjetivo. Portanto, afirmar que "purê de batata é delicioso" depende das experiências e gostos pessoais de quem está dizendo."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();