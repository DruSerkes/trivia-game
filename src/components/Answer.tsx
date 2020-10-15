import * as React from 'react';
import { ListItem } from '@material-ui/core'

type AnswerProps = {
    answer: string;
    answerQuestion: (answer: string) => void
}

export function Answer({ answer, answerQuestion }: AnswerProps) {
    const renderHTML = () => (<span className="AnswerText" dangerouslySetInnerHTML={{ __html: answer }} />)
    return (
        <ListItem className="Answer" divider onClick={() => answerQuestion(answer)}>{renderHTML()}</ListItem>
    );
}