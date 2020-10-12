import * as React from 'react';

type ResultTypes = {
    numCorrect: number
}

export const Result = ({ numCorrect }: ResultTypes) => {
    return (
        <div className="Result">
            <h3>Game Over!</h3>
            <p>You answered {numCorrect} correct</p>
        </div>
    )
}