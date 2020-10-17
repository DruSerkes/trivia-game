import { ADD_QUESTIONS, QuestionType, QuestionsDispatchTypes, QUESTIONS_FAIL, REMOVE_QUESTIONS } from './types';
import { Dispatch } from 'redux';

const BASE_URL = `https://opentdb.com/api.php`;

export function getQuestions(amount = '10', difficulty?: string, type = 'multiple',) {
	return async function (dispatch: Dispatch) {
		try {
			if (difficulty) {
				const response = await fetch(`${BASE_URL}?amount=${amount}&type=${type}&difficulty=${difficulty}`);
				const data = await response.json();
				dispatch(gotQuestions(data));
			} else {
				const response = await fetch(`${BASE_URL}?amount=${amount}&type=${type}`);
				const data = await response.json();
				dispatch(gotQuestions(data));
			}

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

export function removeQuestions(): QuestionsDispatchTypes {
	return {
		type: REMOVE_QUESTIONS
	}
}

export function questionsFail(): QuestionsDispatchTypes {
	return {
		type: QUESTIONS_FAIL
	};
}
