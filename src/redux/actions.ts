import { ADD_QUESTIONS, QuestionType, AddQuestionsType } from './types';
const BASE_URL = `https://opentdb.com/api.php`;
// TODO fix dispatch type...

export function getQuestions(amount = 10, type = 'multiple') {
	return async function(dispatch) {
		const response = await fetch(`${BASE_URL}?amount=${amount}&type=${type}`);
		const data = await response.json();
		dispatch(gotQuestions(data));
	};
}

export function gotQuestions(questionData: any): AddQuestionsType {
	const payload = questionData.results.map((data: QuestionType) => {
		const { question, correct_answer, incorrect_answers }: QuestionType = data;
		return { question, correct_answer, incorrect_answers };
	});
	return {
		type: ADD_QUESTIONS,
		payload
	};
}
