/** @format */

import React from 'react';
import TextArea from '../Componetns/TextArea';
import Context from '../Context/Context';
import InputArea from './../Componetns/InputArea/index';

const Root = () => {
    return (
        <div>
            <Context>
                <InputArea />
                <TextArea />
            </Context>
        </div>
    );
};

export default Root;
