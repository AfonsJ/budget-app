import * as React from 'react';
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';

import { AnimatedFAB, Card } from 'react-native-paper';

import { GoalModal } from './components/GoalModal';

import { useSelector,useDispatch } from 'react-redux';

export const Savings = () => {
    const [modalVisable, setModalVisable] = React.useState(false);

    const goals = useSelector(state=>state.goals.goals);

    const closeModal = () => {
        setModalVisable(false);
    }

    const openModal = () => {
        setModalVisable(true);
    }

    console.log('goals',goals);

    return (
        <View style={styles.container}>
            <GoalModal visable={modalVisable} closeModal={closeModal} openModal={openModal}/>
            <FlatList
                data = {goals}
                renderItem={(goal)=>{
                    <Card>
                        <Card.Title title={goal.title}  />
                        <Card.Content>
                            <Text>{goal.goalBal}</Text>
                        </Card.Content>
                    </Card>
                }}
                keyExtractor={goal=>goal.key}
            />
            <AnimatedFAB 
                icon={'flag'} 
                label={'Goals'} 
                onPress={() => {setModalVisable(true)}} 
                animateFrom={'right'} 
                iconMode={'static'} 
                style={styles.fabStyle} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fabStyle: {
        bottom: 10,
        right: 10,
        position: 'absolute'
    }
});