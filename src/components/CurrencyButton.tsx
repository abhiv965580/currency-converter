import React from 'react'
import type { PropsWithChildren } from 'react'
import {View, StyleSheet, Text} from 'react-native'

type CurrencyButtonProps = PropsWithChildren<{
    name: string,
    flag: string,
}>

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
    },
    flag: {
        fontSize: 22,
        color: 'blue',
        marginBottom: 10
    },
    country: {        
        fontSize: 16,
        color: '#ca8a04'
    }
})

export default CurrencyButton