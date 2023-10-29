import { Modal, Card, Text, TextInput, Button } from "react-native-paper";
import * as React from 'react';
import { StyleSheet } from "react-native";

export const BalanceModal = (props) => {
    const visable = props.visable;
    const [balance, setBalance] = React.useState(0);

    return (
        <Modal visible={visable} onDismiss={()=>{props.closeModal()}} contentContainerStyle={styles.container}>
            <Card>
                <Text variant='headlineMedium'>Enter Your Savings</Text>
                <Text variant='titleMedium'>Enter your balance</Text>
                <TextInput label="amount" onChangeText={(input)=>{setGoalBal(input)}}></TextInput>
                <Button icon='check' mode="elevated" onPress={()=>{props.closeModal()}}>Done</Button>
            </Card>
        </Modal>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
});