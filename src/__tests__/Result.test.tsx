import React from 'react';
import { render } from '@testing-library/react';
import { Result } from '../components/Result'


test('Result Matches Snapshot ', () => {
    const { asFragment } = render(
        <Result numCorrect={666} />
    );
    expect(asFragment()).toMatchSnapshot();
});