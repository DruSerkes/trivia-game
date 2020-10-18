import * as React from 'react';
import { ListItem } from '@material-ui/core'
import { addClass } from '../helpers/addClass'

type AnswerProps = {
    answer: string;
    answerQuestion: (answer: string) => void;
    correct?: boolean | null;
}

export function Answer({ answer, answerQuestion, correct }: AnswerProps) {
    const renderHTML = () => (<span className="AnswerText" dangerouslySetInnerHTML={{ __html: answer }} />)
    const handleClick = ({ nativeEvent: e }: React.MouseEvent) => {
        if (!e.target) return;
        const { classList, tagName, parentElement } = e.target as HTMLLIElement;
        if (correct) {
            addClass('correct', tagName, classList, parentElement)
        } else {
            addClass('incorrect', tagName, classList, parentElement)
        }
        setTimeout(() => answerQuestion(answer), 800);
    }
    return (
        <ListItem id={answer} className="Answer" divider onClick={handleClick}>{renderHTML()}</ListItem>

        // <ListItem className="Answer" divider onClick={() => answerQuestion(answer)}>{renderHTML()}</ListItem>
    );
}