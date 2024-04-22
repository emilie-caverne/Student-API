//question.html

let questionCount = 1;

// Mettre à jour les numéros de question
function updateQuestionNumbers() {
  const questions = document.querySelectorAll('.questionContainer');
  questions.forEach((question, index) => {
    const questionNumber = questionCount + index;
    question.querySelector('h2').textContent = `Question ${questionNumber}`;
  });
}

// ajouter une question
document.getElementById("addQuestionBtn")
.addEventListener("click", function () {
  const questionsContainer = document.getElementById("questionsContainer");
  const newQuestionContainer = document.createElement("div");
  newQuestionContainer.classList.add("questionContainer");
  newQuestionContainer.innerHTML = `
    <h2>Question ${questionCount}</h2>
    <input
      type="text"
      name="question"
      placeholder="Question"
      class="question"
    />
    <span class="removeQuestionBtn">✖</span>
  `;
  questionsContainer.appendChild(newQuestionContainer);
  updateQuestionNumbers();

  // Suprimer la question
  newQuestionContainer
    .querySelector(".removeQuestionBtn")
    .addEventListener("click", function () {
      questionsContainer.removeChild(newQuestionContainer);
      updateQuestionNumbers();
    });
  questionCount++;
});

