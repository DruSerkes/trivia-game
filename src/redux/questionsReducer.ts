import { ADD_QUESTIONS, REMOVE_QUESTIONS, QuestionType, QUESTIONS_FAIL, QuestionsDispatchTypes } from './types';

const INITIAL_STATE: QuestionType[] = [];

const questionsReducer = (state = INITIAL_STATE, action: QuestionsDispatchTypes): QuestionType[] => {
	switch (action.type) {
		case ADD_QUESTIONS:
			return [...action.payload];
		case REMOVE_QUESTIONS:
			return [];
		case QUESTIONS_FAIL:
			return [{ question: 'there was an error, please try again', correct_answer: '', incorrect_answers: [] }];
		default:
			return state;
	}
};

export default questionsReducer;
