import { aleatorio } from './aleatorio.js';
import { perguntas } from './perguntas.js';

const caixaPrincipal = document.querySelector(.caixa - principal);
const caixaPerguntas = document.querySelector(.caixa - perguntas);
const caixaAlternativas = document.querySelector(.caixa - Alternativas);
const caixaResultado = document.querySelector(.caixa - resultado);
const textoResultado = document.querySelector(.caixa - resultado);
const botaojogarNovamente = document.querySelector(".novamente-bth");
const botaoIniciar = document.querySelector (".Novamente");
const telaincia = document.querySelector (".tela-incial");



let atual = 0; 
let perguntaAltual
let historiaFial";

botaoIniciar.addEventListener('click', iniciaJoga);

function iniciaJogo() {
    atual = 0;
    historiaFial = "";
    telaincia.Style.dispal = 'nome';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostra");
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta() {
    if(atual >= perguntas.length){{
        mostraResultado(); 
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAltual.enunciado;
    caixaPerguntas.textContent =";
    mostraAlternativas();
}


function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener(¨click", () =v> respostaselecionada(alternativa));
     caixaAlternativas.appendChild(botaoAlternativas);
   }
}
function respostaselecionada(opçaoselecionada){
    const afirmaçãoes = aleatorio(opçaoselecionada.afirmaçãoes);
    historiaFial += afirmaçãoes + " ";
    atual++;
    mostraPergunta();

    function mostraResultado(){
        caixaPerguntas.textContent = "Em 2049..."
        textoResultado.textContent = historiaFial;
        caixaAlternativas.textContent = "";
        caixaResuultado.classList.add("mostrar");
        botaojogarNovamente.addEventListener("click", jogaNovames);
    }

function jogaNovames(){
    atual = 0;
    historiaFial = "";
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}
subtituiNome();