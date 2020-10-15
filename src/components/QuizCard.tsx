import * as React from 'react';
import { shuffle } from '../helpers/shuffle';
import { QuestionType } from '../redux/types';
import { Answer } from './Answer'
import { Box, Typography, List } from '@material-ui/core'

type QuizCardProps = {
    question: QuestionType;
    answerQuestion: (answer: string) => void
}


export const QuizCard = ({ question, answerQuestion }: QuizCardProps) => {
    let answers: string[] = question?.incorrect_answers.concat(question.correct_answer)
    answers = shuffle(answers)

    return (
        <Box className="QuizCard">
            <Typography variant="h4" dangerouslySetInnerHTML={{ __html: question?.question }} />
            <List className="QuizCardList">
                {answers.map(ans => <Answer answerQuestion={answerQuestion} answer={ans} key={ans} />)}
            </List>
        </Box>
    )
}