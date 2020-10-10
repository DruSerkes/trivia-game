export const ADD_QUESTIONS = 'ADD_QUESTIONS';

interface Question {
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
	[propName: string]: any;
}

interface AddQuestions {
	type: typeof ADD_QUESTIONS;
	payload: Question;
}

export type QuestionType = Question;
export type AddQuestionsType = AddQuestions;
