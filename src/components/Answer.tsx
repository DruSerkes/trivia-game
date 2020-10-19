import * as React from 'react';
import { ListItem } from '@material-ui/core'
import { showIfCorrect } from '../helpers/addClass'

type AnswerProps = {
    answer: string;
    answerQuestion: (answer: string) => void;
    correct?: boolean | null;
}

export function Answer({ answer, answerQuestion, correct }: AnswerProps) {
    const renderHTML = () => (<span className="AnswerText" dangerouslySetInnerHTML={{ __html: answer }} />)
    const handleClick = ({ nativeEvent: e }: React.MouseEvent) => {
        showIfCorrect(e, correct);
        setTimeout(() => answerQuestion(answer), 600);
    }
    return (
        <ListItem id={answer} className="Answer" divider onClick={handleClick}>{renderHTML()}</ListItem>
    );
}