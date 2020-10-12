import * as React from 'react';
import { shuffle } from '../helpers/shuffle';
import { QuestionType } from '../redux/types';
import { Answer } from './Answer'

type QuizCardProps = {
    question: QuestionType;
    answerQuestion: (answer: string) => void
}


export const QuizCard = ({ question, answerQuestion }: QuizCardProps) => {
    let answers: string[] = question?.incorrect_answers.concat(question.correct_answer)
    answers = shuffle(answers)

    return (
        <div className="QuizCard">
            <h4 dangerouslySetInnerHTML={{ __html: question?.question }} />
            <ul className="QuizCardList">
                {answers.map(ans => <Answer answerQuestion={answerQuestion} answer={ans} key={ans} />)}
            </ul>
        </div>
    )
}