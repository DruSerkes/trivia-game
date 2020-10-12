import * as React from 'react';
import { useDispatch } from 'react-redux';
import { getQuestions } from '../redux/actions';

export const Start: React.FC = () => {
    const dispatch = useDispatch();
    
    return (
        <div className="Start">
            <button onClick={() => dispatch(getQuestions())}>Start Game</button>
        </div>
    )
}