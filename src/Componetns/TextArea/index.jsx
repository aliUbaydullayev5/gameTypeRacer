import React, { useContext, useState } from 'react';
import { TextContext } from '../../Context/Context';
import { LengthTitleContext } from '../../Context/lengthTitle';
import { Block } from './style';
import { Select } from 'antd';



const TextArea = () => {
    const [inputValue, setInputValue] = useState('')
    const [state, setState] = useContext(TextContext)
    const [ln, setln] = useContext(LengthTitleContext)
    const [plValue, setPlValue] = useState('')
    const [selectType, setSelectType] = useState(' ');
    const { Option } = Select;

    const handleChange = (value) => {
        if (value === 'enter') {
            setSelectType('Enter')
        }
        if (value === 'space') {
            setSelectType(' ')
        }
    };

    const spaceFunc = (event) => {
        if (event.key === selectType) {
            if (state[ln].title === inputValue.trim()) {
                setState([
                    state.map((value) => ({
                        id: value.id,
                        title: value.title,
                        complate: value.id === ln || value.complate ? true : false
                    }))
                ][0])
                setln(ln + 1)
                setInputValue('')
            }
        }
    }


    return (
        <Block>
            <div className='block'>

            </div>
            <Block.Center>

                <h1>:{inputValue}</h1>
                <div>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={spaceFunc}
                        placeholder={plValue}
                    />
                </div>
            </Block.Center>
            <div className='block'>
                <Select
                    defaultValue="space"
                    style={{
                        width: 200,
                    }}
                    onChange={handleChange}
                    
                >
                    <Option value="enter">:Enter</Option>
                    <Option value="space">:Space</Option>        
                </Select>
                
            </div>
        </Block>
    )
}

export default TextArea;