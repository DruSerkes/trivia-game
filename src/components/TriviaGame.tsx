import React, { useEffect, useState } from 'react';
import { QuestionType } from '../redux/types';
import { Result } from './Result';
import { QuizCard } from './QuizCard'
import { useSelector, useDispatch } from 'react-redux'
import { StoreType } from '../redux/store';
import { Start } from '../components/Start';
import { getQuestions, removeQuestions } from '../redux/actions';
import { Box } from '@material-ui/core'


const INITIAL_QUESTION_STATE = {
	question: '',
	correct_answer: '',
	incorrect_answers: []
}

export const TriviaGame = () => {
	const dispatch = useDispatch()
	const questions = useSelector((state: StoreType) => state.questions);
	const [currentQuestion, setCurrentQuestion] = useState<QuestionType>(INITIAL_QUESTION_STATE);
	const [numAnswered, setNumAnswered] = useState(0);
	const [numCorrect, setNumCorrect] = useState(0);

	const answerQuestion = (answer: string) => {
		if (currentQuestion && answer === currentQuestion.correct_answer) {
			setNumCorrect((correct) => correct + 1);
			setNumAnswered((answered) => answered + 1);
		} else {
			setNumAnswered((answered) => answered + 1);
		}
	};

	const startGame = () => {
		dispatch(removeQuestions())
		dispatch(getQuestions());
		setCurrentQuestion(() => INITIAL_QUESTION_STATE)
		setNumCorrect(() => 0);
		setNumAnswered(() => 0);
	}

	useEffect(() => {
		if (questions.length) setCurrentQuestion(() => questions[numAnswered]);
	}, [questions, numAnswered])


	return (
		<Box className="TriviaGame">
			{numAnswered < 10 ? (
				<QuizCard question={currentQuestion} answerQuestion={answerQuestion} />
			) : (
					<Result numCorrect={numCorrect} />
				)}
			{(numAnswered === 10 || !questions.length) && <Start startGame={startGame} />}
		</Box>

	);
};