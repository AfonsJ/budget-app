import * as React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Settings = () => {
    const [loading, setLoading] = React.useState(false);

    //Clear all data 
    const clearAllData = async () => {
        try{
            setLoading(true);
            await AsyncStorage.clear()
                .then(()=>{
                    setLoading(false);
                })
        }catch(error){
            setLoading(false);
            console.log(error);
        }
    }

    //Clear out just the transaction key (obselete)
    const clearTransactions = async () => {
        try{
            setLoading(true);
            await AsyncStorage.removeItem('@transactions')
                .then(()=>{ 
                    setLoading(false);
                });
        }catch(error){
            setLoading(false);
            console.log(error);
        }
    }
    
    //Clearing out just the balance key (obselete)
    const clearBalance = async () => {
        try{
            await AsyncStorage.removeItem('@balance')
                .then(()=>{
                    setLoading(false);
                });
        }catch(error){
            setLoading(false);
            console.log(error);
        }
    }
    
    return(
        <View>
            <Button mode='elevated' onPress={()=>{clearTransactions()}}>
                Delete All transactions
            </Button>
            <Button mode='elevated' onPress={()=>{clearBalance()}}>
                Delete Balance
            </Button>
            <Button mode='elevated' onPress={()=>{clearAllData()}}>
                Delete All Data
            </Button>
        </View>
    );
}