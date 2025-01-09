const quizData = [
  {
    question: "O que é o Janeiro Branco?",
    options: ["Uma campanha sobre alimentação saudável.", "Uma campanha para promover a saúde mental.", "Uma campanha para combater o sedentarismo."],
    answer: "Uma campanha para promover a saúde mental.",
    explanation: "O Janeiro Branco é uma campanha nacional dedicada à promoção da saúde mental e emocional. Inspirada por movimentos como o Outubro Rosa e o Novembro Azul, a iniciativa foi criada em 2014 pelo psicólogo mineiro Leonardo Abrahão. Seu objetivo é sensibilizar a população para a importância do bem-estar psicológico e estimular a busca por cuidados especializados quando necessários.",
  },
  {
    question: "Qual o objetivo principal do Janeiro Branco?",
    options: ["Chamar atenção para questões de saúde mental.", "Promover exercícios físicos.", "Reforçar a importância da alimentação balanceada."],
    answer: "Chamar atenção para questões de saúde mental.",
    explanation: "O objetivo principal é alertar a população sobre a importância de cuidar da saúde mental, trazendo um debate mais amplo sobre o tema, com palestras mediadas por profissionais.",
  },
  {
    question: "Por que o mês de janeiro foi escolhido?",
    options: ["Porque é o início do ano, simbolizando novos começos.", "Porque é o mês mais tranquilo do ano.", "Porque as pessoas estão mais dispostas a participar de campanhas."],
    answer: "Porque é o início do ano, simbolizando novos começos.",
    explanation: "O primeiro mês do ano é simbolicamente associado a recomeços, reflexões e novos projetos. Segundo o criador da campanha, “o mês é um convite para que cada pessoa reflita sobre suas emoções e relacione-se melhor consigo mesma”.",
  },
  {
    question: "Por que a cor branca foi escolhida para representar o Janeiro Branco?",
    options: ["Porque representa as emoções negativas que queremos evitar.", "Porque é a cor mais usada no verão, atraindo mais atenção.", "Porque simboliza harmonia e recomeço, como uma folha em branco."],
    answer: "Porque simboliza harmonia e recomeço, como uma folha em branco.",
    explanation: "A escolha do nome “Janeiro Branco” remete à ideia de uma “folha em branco”, incentivando as pessoas a reescreverem suas histórias e priorizarem a saúde mental."
  },
  {
    question: "Como podemos cuidar da saúde mental?",
    options: ["Praticando autocuidado e buscando ajuda quando necessário.", "Ignorando problemas emocionais.", "Focando apenas na saúde física."],
    answer: "Praticando autocuidado e buscando ajuda quando necessário.",
    explanation: "Cuidar da saúde mental envolve práticas de autocuidado, como meditação e terapia, além de buscar ajuda profissional quando necessário."
  },
];

const quizContainer = document.getElementById("quiz");
const explanationContainer = document.getElementById("explanation");
const nextQuestionButton = document.getElementById("next-question");

let currentQuestion = 0;
let score = 0;

// Carrega a pergunta atual
function loadQuestion() {
  const questionData = quizData[currentQuestion];
  quizContainer.innerHTML = `
    <div class="question">${questionData.question}</div>
    <div class="options">
      ${questionData.options.map(
        (option, index) =>
          `<button id="option-${index}" onclick="checkAnswer(this, '${option}')">${option}</button>`
      ).join("")}
    </div>
  `;
  explanationContainer.style.display = "none";
  explanationContainer.innerHTML = "";
  nextQuestionButton.style.display = "none";
}

// Verifica a resposta do usuário
function checkAnswer(button, selectedOption) {
  const questionData = quizData[currentQuestion];
  const buttons = document.querySelectorAll(".options button");

  // Desativa todos os botões
  buttons.forEach((btn) => btn.classList.add("disabled"));

  // Marca as respostas como corretas ou erradas
  if (selectedOption === questionData.answer) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    buttons.forEach((btn) => {
      if (btn.innerText === questionData.answer) {
        btn.classList.add("correct");
      }
    });
  }

  // Exibe a explicação
  explanationContainer.style.display = "block";
  explanationContainer.innerHTML = `<p>${questionData.explanation}</p>`;

  // Exibe o botão de próxima pergunta
  nextQuestionButton.style.display = "block";
}

// Avança para a próxima pergunta ou mostra o resultado final
nextQuestionButton.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    quizContainer.innerHTML = `<h4>Você terminou o quiz! Pontuação final: ${score}/${quizData.length}</h4>
    <p> Para mais informações sobre o Janeiro Branco, acesse os sites:</p>
    <p><a target="_blank" href="https://www.gov.br/cetene/pt-br/assuntos/noticias/janeiro-branco-uma-reflexao-sobre-a-importancia-da-saude-mental">Site do Governo Federal</a></p>
    <p><a target="_blank" href="https://janeirobranco.org.br/">Site da Camapnha</a></p>`;
    explanationContainer.style.display = "none";
    nextQuestionButton.style.display = "none";
  }
});

// Inicia o quiz
loadQuestion();
