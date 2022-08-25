import React, { createContext, useState } from 'react';
import { data } from '../Mock/data'
import LengthTitle from './lengthTitle';
export const TextContext = createContext();
export const Context = ({ children }) => {

    const [state, setState] = useState(data.split(' ').map((value, index) => ({ id: index, title: value, complate: false })))

    return (
        < TextContext.Provider value={[state, setState]} >
            <LengthTitle>
                {children}
            </LengthTitle>
        </TextContext.Provider >
    )
}

export default Context;