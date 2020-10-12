import * as React from 'react';
// import { useDispatch } from 'react-redux';
// import { getQuestions } from '../redux/actions';

type StartProps = {
    startGame: () => void
}
export const Start = ({ startGame }: StartProps) => {
    // const dispatch = useDispatch();

    return (
        <div className="Start">
            <button onClick={startGame}>Start New Game</button>
        </div >
    )
}