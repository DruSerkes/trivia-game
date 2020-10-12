import * as React from 'react';
import { useDispatch } from 'react-redux';
import { getQuestions } from '../redux/actions';

const Start = () => {
    const dispatch = useDispatch();
    
    return (
        <div className="Start">
            <button onClick={() => dispatch(getQuestions())}>Start Game</button>
        </div>
    )
}

export default Start;