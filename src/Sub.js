import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { up, change, create } from './store';


const Sub = () => {
    const { word, changeMode, createInput } = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(createInput)

    return (
        <div>
            주어는 {word}
            <button onClick={
                () => dispatch(up())
            }>숫자 올리기</button>

            <button onClick={
                () => dispatch(change())
            }>
                change mode
            </button>

            <button onClick={
                () => dispatch(create('할로윈'))
            }>
                값 전달하기</button>

        </div>
    )
}

export default Sub;