//@ts-
import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

/**
 *
 * @param {Quiz} quiz  quiz object
 * @param {UI} ui ui object
 */
const renderPage = (quiz, ui) => {
  if (quiz.finalizarQuiz()) {
    console.log(quiz.score);
    ui.showScore(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoise) => {
      quiz.adivinar(currentChoise);
      renderPage(quiz, ui);
    });
    ui.showProgress(quiz.questionIndex+1, quiz.questions.length);
  }
};

function main() {
  const quiz = new Quiz(questions);
  const ui = new UI();

  renderPage(quiz, ui);

  //console.log(quiz.getQuestionIndex().choices)
}

main();
