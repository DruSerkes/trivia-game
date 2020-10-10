import { ADD_QUESTIONS, QuestionType, QuestionsDispatchTypes, QUESTIONS_FAIL } from './types';
import { Dispatch } from 'redux';

const BASE_URL = `https://opentdb.com/api.php`;

export function getQuestions(amount = 10, type = 'multiple') {
	return async function(dispatch: Dispatch) {
		try {
			const response = await fetch(`${BASE_URL}?amount=${amount}&type=${type}`);
			const data = await response.json();
			dispatch(gotQuestions(data));
		} catch (e) {
			console.log(e);
			dispatch(questionsFail());
		}
	};
}

export function gotQuestions(questionData: any): QuestionsDispatchTypes {
	const payload = questionData.results.map((data: QuestionType) => {
		const { question, correct_answer, incorrect_answers }: QuestionType = data;
		return { question, correct_answer, incorrect_answers };
	});
	return {
		type: ADD_QUESTIONS,
		payload
	};
}

export function questionsFail(): QuestionsDispatchTypes {
	return {
		type: QUESTIONS_FAIL
	};
}
