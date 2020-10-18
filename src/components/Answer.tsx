import * as React from 'react';
import { ListItem } from '@material-ui/core'

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
            if (tagName === 'LI') {
                classList.add('correct')
            } else {
                parentElement?.classList.add('correct');;
            }
        } else {
            if (tagName === 'LI') {
                classList.add('incorrect')
            } else {
                parentElement?.classList.add('incorrect');;
            }
        }
        setTimeout(() => answerQuestion(answer), 800);
    }
    return (
        <ListItem id={answer} className="Answer" divider onClick={handleClick}>{renderHTML()}</ListItem>

        // <ListItem className="Answer" divider onClick={() => answerQuestion(answer)}>{renderHTML()}</ListItem>
    );
}