import React from 'react';
import { render } from '@testing-library/react';
import { Result } from '../components/Result'


test('Result Matches Snapshot ', () => {
    const { asFragment } = render(
        <Result numCorrect={666} numAnswered={667} />
    );
    expect(asFragment()).toMatchSnapshot();
});



test('Result renders expected text ', () => {
    let numCorrect = 5
    let numAnswered = 10
    const { getByText } = render(
        <Result numCorrect={numCorrect} numAnswered={numAnswered} />
    );
    const resultText = getByText(`You answered ${numCorrect} out of ${numAnswered} correct`)
    expect(resultText).toBeInTheDocument();
});