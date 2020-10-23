import * as React from 'react';
import { useEffect, useState } from 'react';
import { ListItem } from '@material-ui/core'

type AnswerProps = {
    answer: string;
    handleAnswerQuestion: (answer: string, e: MouseEvent, correct: boolean | null | undefined) => void;
    correct?: boolean | null;
}

// TODO: if correct, render it with a ref for correct answer 
export function Answer({ answer, handleAnswerQuestion, correct }: AnswerProps) {
    const [mounted, setMounted] = useState(true);
    const renderHTML = () => (<span className="AnswerText" dangerouslySetInnerHTML={{ __html: answer }} />);
    const handleClick = ({ nativeEvent: e }: React.MouseEvent) => {
        handleAnswerQuestion(answer, e, correct);
        setTimeout(() => setMounted(!mounted), 500);
    };

    useEffect(() => {
        const answerElements = document.querySelectorAll('.Answer');
        Array.from(answerElements).forEach((el) => {
            el.classList.remove('correct');
            el.classList.remove('incorrect');
        })
    }, [mounted])

    return (
        <ListItem id={answer} className="Answer" divider onClick={handleClick} >{renderHTML()}</ListItem>
    );
}