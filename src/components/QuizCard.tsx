import * as React from 'react';
import { shuffle } from '../helpers/shuffle';
import { QuestionType } from '../redux/types';
import { Answer } from './Answer'

type QuizCardProps = {
    question: QuestionType | null;
    answerQuestion: (answer: string) => void
}


export const QuizCard = ({ question, answerQuestion }: QuizCardProps) => {
    if (!question) return null;
    let answers: string[] = question?.incorrect_answers.concat(question.correct_answer)
    answers = shuffle(answers)

    return (
        <div className="QuizCard">
            <h4>{question?.question}</h4>
            <ul className="QuizCardList">
                {answers.map(ans => <Answer answerQuestion={answerQuestion} answer={ans} />)}
            </ul>
        </div>
    )
}