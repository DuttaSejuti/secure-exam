const { v4: uuidv4 } = require('uuid');
const Answer = require('./Answer');

const _id = new WeakMap();
const _answers = new WeakMap();

class AnswerSheet {
    constructor() {
        const uniqueId = uuidv4();
        _id.set(this, uniqueId);
        _answers.set(this, []);
    }

    getId() {
        return _id.get(this);
    }
    push(answer) {
        const answers = _answers.get(this);
        answers.push(answer);
        _answers.set(this, answers);
        return _answers.get(this);
    }

    pop(answer) {
        const answers = _answers.get(this);
        if(answers.some(ans => ans.getQuestionId() == answer.getQuestionId())) {
            answers = answers.filter((ans, index, answers) => {
                return ans.getQuestionId() != answer.getQuestionId();
            });
        }
        _answers.set(this, answers);
    }
    toString() {
        const answers = _answers.get(this); 
        for(const answer of answers) {
            console.log(answer.getAnswerString());
        }
    }

}

module.exports = AnswerSheet;


const answer1 = new Answer(uuidv4(), "A");


const answerSheet1 = new AnswerSheet();
answerSheet1.push(answer1);

console.log(answerSheet1.toString());



