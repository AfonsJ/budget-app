import {Button, Card, Text, TextInput} from 'react-native-paper';
import * as React from 'react';
import { useDispatch } from 'react-redux';

import { addGoal } from '../../../redux/goalSlice';


export const GoalModal = (props) => {
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
        <Card>
            <Text style={{marginBottom: 5,padding: 10}} variant='headlineMedium'>Enter Your Goal</Text>
            <Text style={{padding:10}}variant='titleMedium'>Enter a spending limit!</Text>
            <TextInput value={goalTitle} label="title" onChangeText={(input)=>{setGoalTitle(input)}}></TextInput>
            <TextInput value={goalBal} label="amount" keyboardType='numeric' onChangeText={(input)=>{setGoalBal(input)}}></TextInput>
            <Button icon='check' mode="elevated" onPress={()=>{addG();props.closeModal()}}>Done</Button>
        </Card>
    )
}