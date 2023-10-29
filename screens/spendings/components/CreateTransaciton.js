import { useState } from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';


export const CreateTransaciton = (props) => {
    const [amount, setAmount] = useState(0);

    const checkInput = (input) => {
        //todo; check input for numbers only    
    }

    return (
        <View style={props.style}>
            <Text style={styles.bigText}>
                Enter the amount you spent.
            </Text>
            <TextInput keyboardType='numeric' placeholder='Dollar Amount' onChangeText={input => setAmount(input)}/>
            <Text style={styles.smallText}>Amount Spent ${amount}</Text>
        </View>
    );
}



styles = StyleSheet.create({
    smallText: {
        fontWeight: '200',
        fontSize: 12,
        fontFamily: 'serif'
    },
    bigText: {
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: 'serif'
    }
});