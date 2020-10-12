import * as React from 'react';

type AnswerProps = {
    answer: string;
    answerQuestion: (answer: string) => void
}

export const Answer = ({ answer, answerQuestion }: AnswerProps) => {
    return (
        <li className="Answer" onClick={() => answerQuestion(answer)} dangerouslySetInnerHTML={{ __html: answer }} />
    )
}