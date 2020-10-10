/*
    * Redux lives here 
    * Local state to keep track of current question (which gets passed down) 
    * Local state to keep track of answers (correct, answered)  
    * Renders Start if no questions in state
    * Renders QuizCard otherwise
        * pass question data down 
    * Renders Result if …
    * 
    * 
    * res.data.results[0-9]
        * set amount=10
        * set type=multiple
        * .question 
        * .correct_answer 
        * .incorrect_answers[0-2]
*/
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

interface Question {
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
}

const TriviaGame = () => {
	const questions = useSelector((state) => state.questions);
	const [ currentQuestion, setCurrentQuestion ] = useState<Question | null>(null);
	const [ numAnswered, setNumAnswered ] = useState(0);
	const [ numCorrect, setNumCorrect ] = useState(0);

	const answerQuestion = ({ answer }) => {
		if (answer === currentQuestion.correct_answer) setNumCorrect((correct) => correct++);
		setNumAnswered((answered) => answered++);
		setCurrentQuestion((prevQuestion) => questions[numAnswered]);
	};

	return (
		<div className="TriviaGame">
			{numAnswered < 10 ? (
				<QuizCard question={currentQuestion} answerQuestion={answerQuestion} />
			) : (
				<Result answers={answers} />
			)}
		</div>
	);
};

export default TriviaGame;
