import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { Text } from 'react-native-paper';
import {SpendingDisplay} from './components/SpendingDisplay';

import categoryColor from './assests/categoryColor.json';

import { useSelector, useDispatch } from 'react-redux';

export const Home = () => {
    //grabbing our transactions state
    const transactions = useSelector(state=>state.transactions.trans);
    const [spent,setSpent] = React.useState(0);

    const [series, setSeries] = React.useState([]);
    const [sliceColours, setSliceColours] = React.useState([]);

    //amount spent
    const amountSpent = 0;

    const sumArray = (arr) => {
        var sum = 0;

        arr.forEach(elem => {
            sum += Number(elem.amount);
        });

        return sum
    }


    // formating data for graph
    const extractGraphData = () => {
        let newSeries = [...series];
        let newSliceColours = [...sliceColours];
    
        transactions.forEach((item) => {
            newSeries.push(item.amount);
    
            if (item.category in categoryColor) {
                newSliceColours.push(categoryColor[item.category]);
            } else {
                newSliceColours.push(categoryColor.empty);
            }
        });
    
        setSeries(newSeries);
        setSliceColours(newSliceColours);
    }

    // When transactions get updated convert data for graphing
    React.useEffect(()=>{
        extractGraphData();
        setSpent(sumArray(transactions));
    },[transactions]);

    return (
        <View style={styles.container}>
            <SpendingDisplay style={styles.graph} series={series} sliceColours={sliceColours}/>
            <Text variant='displaySmall'>Amount Spent: {spent}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
            flex: 1
    },
    graph: {
        alignSelf: 'center',
        padding: 10
    }
});