import * as React from 'react';
import { useRef } from 'react';
import { shuffle } from '../helpers/shuffle';
import { QuestionType } from '../redux/types';
import { Answer } from './Answer';
import { Box, Typography, List } from '@material-ui/core';
import { showIfCorrect } from '../helpers/addClass';

type QuizCardProps = {
    question: QuestionType;
    answerQuestion: (answer: string) => void
}

// TODO: update handleAnswerQuestion:
// - if not correct, 
// - find the html element with the correct ref
// - add a class to it "show-correct"
// - style "show-correct" class to have a green border 
export const QuizCard = ({ question, answerQuestion }: QuizCardProps) => {
    const chosen = useRef(false);
    const answers: string[] = question?.incorrect_answers.concat(question.correct_answer);
    const shuffledAnswers: string[] = shuffle(answers);

    const handleAnswerQuestion = (answer: string, e: MouseEvent, correct: boolean | null | undefined): void => {
        if (chosen.current) return;
        chosen.current = true;
        showIfCorrect(e, correct);
        setTimeout(() => {
            answerQuestion(answer);
            chosen.current = false;
        }, 600);
    };

    return (
        <Box className="QuizCard" data-testid="QuizTest">
            <Typography variant="h5" dangerouslySetInnerHTML={{ __html: question?.question }} />
            <List className="QuizCardList">
                {shuffledAnswers.map(ans => {
                    if (ans === question.correct_answer) {
                        return <Answer handleAnswerQuestion={handleAnswerQuestion} answer={ans} key={ans} correct />
                    } else {
                        return <Answer handleAnswerQuestion={handleAnswerQuestion} answer={ans} key={ans} />;
                    }
                })}
            </List>
        </Box>
    )
}