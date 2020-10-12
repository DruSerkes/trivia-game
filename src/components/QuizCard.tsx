import * as React from 'react';
import { QuestionType } from '../redux/types';

type QuizCardProps = {
    question: QuestionType | null;
    answerQuestion: (answer: string) => void
}


export const QuizCard = ({ question, answerQuestion }: QuizCardProps) => {
    // Render the 3 incorrect answers and the correct answer
    // Do so with each being a separate Answer component
    // Answer component should accept props for question and isCorrect (optional bool)
    // When Answer is clicked, it should fire off answerQuestion with the answer passed in


    return (
        <div className="QuizCard">
            <h4>{question?.question}</h4>
            {/* RENDER 4 ANSWERS HERE */}
        </div>
    )
}