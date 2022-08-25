import React, { useContext } from 'react';
import { TextContext } from '../../Context/Context';
import { Block } from './style'; 


const InputArea = () => {

    const [state] = useContext(TextContext)
    return (
        <Block className='nocopy'>
            {state.map((value, id) => (
                <Block.Text key={id} complate={value.complate}> {value.title} </Block.Text>
            ))}
        </Block>
    )
}

export default InputArea;