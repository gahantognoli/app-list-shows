import React, { useState } from 'react';
import { TextInput } from 'react-native';

const GenericInput = (props) => {

    const { initialValue, style, onChangeText } = props;
    const [stateValor, setStateValor] = useState(initialValue);

    const onChange = text => {
        setStateValor(text);
        onChangeText(text);
    }

    return (
        <TextInput value={stateValor} style={style} 
            onChangeText={onChange} />
    )
}

export default GenericInput;