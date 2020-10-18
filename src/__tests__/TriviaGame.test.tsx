import * as React from 'react';
import { render, fireEvent, waitForDomChange } from '@testing-library/react'
import { TriviaGame } from '../components/TriviaGame'
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../redux/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


describe('TriviaGame tests', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <TriviaGame />
            </Provider>
        )
        expect(asFragment()).toMatchSnapshot()
    })
})


test('Clicking the button starts the game ', async () => {
    const { getByText, getByTestId } = render(
        <Provider store={store}>
            <TriviaGame />
        </Provider>);

    const startBtn = getByText('Start New Game');
    fireEvent.click(startBtn);
    await waitForDomChange()
    expect(startBtn).not.toBeInTheDocument();
    const quizCard = getByTestId('QuizTest');
    expect(quizCard).toBeInTheDocument();
});