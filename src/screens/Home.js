import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Séries Inc.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default HomeScreen;