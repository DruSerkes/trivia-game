import * as React from 'react';
import { ListItem } from '@material-ui/core'

type AnswerProps = {
    answer: string;
    answerQuestion: (answer: string) => void;
    correct: boolean | null;
}

export function Answer({ answer, answerQuestion, correct }: AnswerProps) {
    const renderHTML = () => (<span className="AnswerText" dangerouslySetInnerHTML={{ __html: answer }} />)
    handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        console.log(e.target);
        // document.getElementById(`${answer}`)
        // if (correct) e.target.push()
    }
    return (
        // <ListItem id={answer} className="Answer" divider onClick={handleClick}>{renderHTML()}</ListItem>

        <ListItem className="Answer" divider onClick={() => answerQuestion(answer)}>{renderHTML()}</ListItem>
    );
}