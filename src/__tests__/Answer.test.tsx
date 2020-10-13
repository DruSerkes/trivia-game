import * as React from 'react';
import { render } from '@testing-library/react'
import { Answer } from '../components/Answer'


describe('Answer tests', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(
            <Answer answer='lets test' answerQuestion={() => console.log('testing')} />
        )
        expect(asFragment()).toMatchSnapshot()
    })
})