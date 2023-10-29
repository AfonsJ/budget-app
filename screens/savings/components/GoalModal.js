import {Button, Card, Modal, Text, TextInput} from 'react-native-paper';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { addGoal } from '../../../redux/goalSlice';


export const GoalModal = (props) => {
    const visable = props.visable;
    const dispatch = useDispatch();

    const [goalTitle, setGoalTitle] = React.useState("Unnamed Goal");
    const [goalBal, setGoalBal] = React.useState(0);

    const addG = async () => {
        const goalToAdd = {
            key: Date(),
            title: goalTitle,
            goalBal: goalBal
        }

        dispatch(addGoal(goalToAdd));
    }

    return (
        <Modal visible={visable} onDismiss={()=>{props.closeModal()}} contentContainerStyle={styles.container}>
            <Card>
                <Text variant='headlineMedium'>Enter Your Goal</Text>
                <Text variant='titleMedium'>Enter your maximum spending limit</Text>
                <TextInput label="title" onChangeText={(input)=>{setGoalTitle(input)}}></TextInput>
                <TextInput label="amount" keyboardType='numeric' onChangeText={(input)=>{setGoalBal(input)}}></TextInput>
                <Button icon='check' mode="elevated" onPress={()=>{addG();props.closeModal()}}>Done</Button>
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