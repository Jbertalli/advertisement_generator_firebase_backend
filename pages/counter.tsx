import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { decrement, increment, incrementByAmount } from '../slices/counterSlice';
import type { RootState } from '../store';

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState<string>('0');

    return (
        <>
            {count}
            <button
                onClick={() => dispatch(increment())}    
            >
                Increment
            </button>
            <button
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
            <input 
                value={incrementAmount}
                onChange={e => setIncrementAmount(e.target.value)}
            />
            <button
                onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
            >
                Add Amount
            </button>
        </>
    );
}
