export class Question {
  /**
   *
   * @param {string} text this is a text of the question
   * @param {string[]} choices
   * @param {string} answer
   */

  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   *
   * @param {string} choice
   * @returns {boolean}  return true if answer is correct
   */

  correctAnswer(choice) {
    return choice === this.answer;
  }
}

