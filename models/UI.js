//@ts-check
export class UI{
    constructor(){}
    


    showQuestion(text){
        const questionTitle = document.getElementById("question");
        questionTitle.innerText = text;
    }

    /**
     * 
     * @param {string[]} choices 
     */
    showChoices(choices,callback){
        const choicesContainer = document.getElementById("choices");
        choicesContainer.innerHTML=''

        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement("button");
            button.innerText = choices[i];
            button.className = 'button'
            button.addEventListener("click", () => callback(choices[i]));

            choicesContainer.append(button);
            
        }
        
    }

    /**
     * 
     * @param {number} score total score
     */
    showScore(score){
        const quizEndHTML = `
        <h1>Resultado</h1>
        <h2>tu puntaje es ${score}</h2>
        `
        const element = document.getElementById('quiz');
        element.innerHTML= quizEndHTML;
    }

    /**
     * 
     * @param {number} currentIndex the current index for the quiz
     * @param {number} total the total question
     */
    showProgress(currentIndex,total){
        const element = document.getElementById('progress')
        element.innerHTML = `Pregusta ${currentIndex} de ${total}`

    }
}