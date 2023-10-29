import * as React from 'react';
import { TouchableOpacity, View, Text, Pressable, StyleSheet, TextInput, FlatList } from 'react-native';
import AppLoading from 'expo-app'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {TransactionModal } from './components/TransactionModal';
import {CreateTransaction} from './components/CreateTransaciton';

export const Spendings = () => {
    const [loading, setLoading] = React.useState(true);

    const [modalVisible, setModalVisable] = React.useState(false);

    let transactions;
    
    const [transAmount, setTransAmount] = React.useState();
    const [transCat, setTransCat] = React.useState('');
    const [transDate, setTransDate] = React.useState();
    const [transTitle, setTransTitle] = React.useState("Transaction");

    //todo add custom categories;
    const categories = {
        eatingOut: 'Eating Out',
        rent: 'Rent',
        medication: 'Medication',
        grocery: 'Grocery'
    }

    const closeTransactionModal = () => {
        setModalVisable(false);
    }

    const transactionToBeSaved = {
        'title': transTitle,
        'amount': transAmount,
        'category': transCat,
        'date': transDate
    };

    const getTransactionData = async () => {
        let values;
        try {
            values = await AsyncStorage.getItem('@transactions');
            return values != null ? JSON.parse(values) : null;
        }catch(e){
            console.log("error fetching data;");
        }
        
        setLoading(false);
    }

    const setTransactionData = async (transactionToBeSaved) => {
        transactions = transactions.push(transactionToBeSaved);
        try{    
            await AsyncStorage.setItem('@transactions', JSON.stringify(transactions));
        }catch(e){
            console.log('error saving transaction');
        }
    }

    React.useEffect(getTransactionData);

    if(loading){
        return (
            <View styles={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Text>Loading Data</Text>
            </View>
        );
    }

    return (    
        <View>
            <TransactionModal modalVisible={modalVisible} closeModal={closeTransactionModal} />
                <FlatList

                >
                </FlatList>
                <Pressable onPress={()=>{setModalVisable(true)}}>  
                    <Text>Add Trans.</Text>
                </Pressable>
        </View>
    );
}
