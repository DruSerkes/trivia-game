import * as React from 'react';
import { render } from '@testing-library/react'
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