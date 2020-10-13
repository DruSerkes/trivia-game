import * as React from 'react';
import { render } from '@testing-library/react'
import { Answer } from '../components/Answer'
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../redux/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


describe('Answer tests', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(
            // <Provider store={store}>
            <Answer answer='lets test' answerQuestion={() => console.log('testing')} />
            // </Provider>
        )
        expect(asFragment()).toMatchSnapshot()
    })
})