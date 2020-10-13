import React from 'react';
import { render } from '@testing-library/react';
import { Start } from '../components/Start'


test('Start Matches Snapshot ', () => {
    const { asFragment } = render(
        <Start startGame={() => { }} />
    );
    expect(asFragment()).toMatchSnapshot();
});