import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../redux/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


test('App renders without breaking ', () => {
	const { asFragment } = render(
		<Provider store={store}>
			<App />
		</Provider>
	);
	expect(asFragment()).toMatchSnapshot();
});
