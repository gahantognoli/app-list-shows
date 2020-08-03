import React, { useState } from 'react';
import { TextInput, StyleSheet, Text } from 'react-native';
import GenericInput from './GenericInput';

const Input = (props) => {

    const { label, initialValue, onChange } = props;

    const onChangeText = text => {
        onChange(text);
    }

    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <GenericInput
                initialValue={initialValue}
                style={styles.textInput}
                onChangeText={onChangeText}
            />
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 4,
        height: 40,
        fontSize: 16,
        marginBottom: 15,
        backgroundColor: '#fff'
    },
    label: {
        fontSize: 18
    }
});

export default Input;