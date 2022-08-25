import React, { createContext, useState } from 'react';

export const LengthTitleContext = createContext();

const LengthTitle = ({children}) => {
    const [ln, setln] = useState(0)
    return (
        <LengthTitleContext.Provider value={[ln, setln]}>
            {children}
        </LengthTitleContext.Provider>
    )
}

export default LengthTitle;