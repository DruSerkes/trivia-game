import * as React from 'react';
import { render } from '@testing-library/react';
import { Feedback } from '../components/Feedback'

describe('Feedback tests', () => {

    it('matches snapshot', () => {
        const { asFragment } = render(<Feedback />)
        expect(asFragment()).toMatchSnapshot();
    })

    it('should be in the document', () => {
        const { getByTestId } = render(<Feedback />);
        expect(getByTestId('Feedback')).toBeInTheDocument();
    })

})