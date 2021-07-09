const { v4: uuidv4 } = require('uuid');

const _id = new WeakMap()
const _questionId = new WeakMap()
const _answerString = new WeakMap()

class Answer {
    constructor(questionId, answerString) {
        const uniqueId = uuidv4();
        _id.set(this, uniqueId);
        _questionId.set(this, questionId);
        _answerString.set(this, answerString); 

    }

    getAnswerId() {
        return _id.get(this);
    }

    getQuestionId() {
        return _questionId.get(this);
    }

    getAnswerString() {
        return _answerString.get(this);
    }

    setQuestionId(questionId) {
        _questionId.set(this, questionId);
        return _questionId.get(this);

    }

    setAnswerString(answerString) {
        _answerString.set(this, answerString);
        return _answerString.get(this);
    }

}

module.exports = Answer;

const answer1 = new Answer(uuidv4(), "Dhaka is the capital city of Bangladesh");

console.log(answer1.getAnswerString());

