// @ts-check


import { Question } from "./Question.js";

export class Quiz{

    questionIndex = 0
    score = 0

    /**
     * 
     * @param {Question[]} questions 
     */
    constructor(questions){
        this.questions =questions;
    }

    /**
     * 
     * @returns {Question}
     */

    getQuestionIndex(){
        return this.questions[this.questionIndex]
    }


    /**
     * 
     * @param {string} answer 
     */

    adivinar(answer){
        console.log(answer)
        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++
        }
        this.questionIndex++
    }

    finalizarQuiz(){
        return this.questions.length === this.questionIndex
    }



}



