import * as React from 'react';

type StartProps = {
    startGame: () => void
}

export const Start = ({ startGame }: StartProps) => {

    return (
        <div className="Start">
            <button onClick={startGame}>Start New Game</button>
        </div >
    )
}