import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import GenericInput from './GenericInput';

const SearchInput = (props) => {
    const { initialValue, onChange } = props;

    const onChangeText = text => {
        onChange(text);
    }

    return (
        <>
            <View style={styles.viewStyle}>
                <AntDesign
                    name="search1"
                    size={28} color="back"
                    style={styles.searchIcon} />
                <GenericInput
                    initialValue={initialValue}
                    style={styles.textInput}
                    onChangeText={onChangeText} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 4,
        fontSize: 16,
        width: '88%',
        padding: 5
    },
    label: {
        fontSize: 18
    },
    viewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderRadius: 40
    },
    searchIcon: {
        alignSelf: 'center',
        paddingLeft: 10
    }
});

export default SearchInput;