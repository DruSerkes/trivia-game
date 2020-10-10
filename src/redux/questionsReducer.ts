import { ADD_QUESTIONS, QuestionType } from './types';

const INITIAL_STATE: QuestionType[] = [];

const questionsReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case ADD_QUESTIONS:
			return [ ...action.payload ];
		default:
			return state;
	}
};

export default questionsReducer;
