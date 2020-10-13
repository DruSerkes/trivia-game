import React from 'react';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../redux/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { QuizCard } from '../components/QuizCard'
import { QuestionType } from '../redux/types';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const question: QuestionType = {
    question: 'testing',
    correct_answer: 'true',
    incorrect_answers: ['false', 'false too', 'also false']
}
test('QuizCard Matches Snapshot ', () => {
    const { asFragment } = render(
        <Provider store={store}>
            <QuizCard question={question} answerQuestion={() => { }} />
        </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});