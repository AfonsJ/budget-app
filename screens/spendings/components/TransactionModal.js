import * as React from 'react';
import { StyleSheet, Dimensions} from "react-native";
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../../redux/transactionSlice';
import { Card, Text, TextInput,Button, useTheme } from 'react-native-paper';

import DropDownPicker from 'react-native-dropdown-picker';

export const TransactionModal = (props) => {
    const screenWidth = Dimensions.get('window').width;
    const theme = useTheme();

    const [transAmount, setTransAmount] = React.useState(0);
    const [transTitle, setTransTitle] = React.useState("Unnamed Transaction");

    const categories = [
        {label: 'Eating Out', value: 'eatingOut'},
        {label: 'Rent/Housing', value: 'rent'},
        {label: 'Medical', value: 'medical'},
        {label: 'Grocery', value: 'grocery'},
        {label: 'Utilities', value:'utilities'},
        {label: 'Transportation', value:'transportation'},
        {label: 'Clothes', value: 'clothes'},
        {label: 'Personal Spending', value: 'personalSpending'},
        {label: 'Entertainment', value: 'entertainment'},
        {label: 'Investments', value: 'investments'},
        {label: 'Misc.', value: 'misc'}
    ]

    //States for dropdown
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('misc');
    const [items, setItems] = React.useState(categories);
    const dispatch = useDispatch();

    //Check input for numbers only
    const cleanAmount = (val) => {
        //todo
    }


    const addTrans = async () => {
        const transactionToBeSaved = {
            key: Date(),
            title: transTitle,
            amount: transAmount,
            category: value
        }

        dispatch(addTransaction(transactionToBeSaved));
    }

    return (
        <Card>
            <Text style={{alignSelf:'center'}} variant='headlineMedium'>Enter Details</Text>
            <TextInput value={transTitle} label="Title" onChangeText={(input) => setTransTitle(input)}></TextInput>
            <DropDownPicker 
                style={{width: screenWidth,borderRadius:0,backgroundColor: theme.colors.surface}} 
                labelStyle={{color: (open)?theme.colors.primary :theme.colors.onBackground}}
                textStyle={{color: (open)?theme.colors.primary :theme.colors.onBackground}} 
                listMode='MODAL' 
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
            <TextInput value={transAmount} keyboardType='numeric' label='Dollar Amount' onChangeText={(input) => setTransAmount(input)}/>
            <Button onPress={() => {addTrans(); props.closeModal()}}>Add</Button>
        </Card>
    );
}
