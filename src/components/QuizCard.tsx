import * as React from 'react';
import { QuestionType } from '../redux/types';

type QuizCardProps = {
    question: QuestionType | null;
    answerQuestion: (answer: string) => void
}


export const QuizCard = ({ question, answerQuestion }: QuizCardProps) => {
    // use shuffle helper to shuffle the answers 
    // create some state for a single array with all the answers in random order
    // Map over array to render Answer components


    return (
        <div className="QuizCard">
            <h4>{question?.question}</h4>
            <ul className="QuizCardList">
                {/* TODO RENDER 4 ANSWERS HERE */}
            </ul>
        </div>
    )
}