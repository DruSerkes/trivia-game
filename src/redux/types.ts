export const ADD_QUESTIONS = 'ADD_QUESTIONS';
export const REMOVE_QUESTIONS = 'REMOVE_QUESTIONS';
export const QUESTIONS_FAIL = 'QUESTIONS_FAIL';

interface Question {
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
	[propName: string]: any;
}

interface AddQuestions {
	type: typeof ADD_QUESTIONS;
	payload: Question[];
}

interface QuestionsFail {
	type: typeof QUESTIONS_FAIL;
}

interface RemoveQuestions {
	type: typeof REMOVE_QUESTIONS;
}

export type QuestionType = Question;
export type QuestionsDispatchTypes = AddQuestions | QuestionsFail | RemoveQuestions;
