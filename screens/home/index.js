import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { Text } from 'react-native-paper';
import {SpendingDisplay} from './components/SpendingDisplay';

import categoryColor from './assests/categoryColor.json';

import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-web';

export const Home = () => {
    //grabbing our transactions state
    const transactions = useSelector(state=>state.transactions.trans);
    const goals = useSelector(state=>state.goals.goals);
    
    const [metGoals, setMetGoals] = React.useState([]);
    const [spent,setSpent] = React.useState(0);

    const [series, setSeries] = React.useState([]);
    const [cats, setCats] = React.useState([]);
    const [sliceColours, setSliceColours] = React.useState([]);



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
    
        let newCats = [...cats];

        transactions.forEach((item) => {
            newSeries.push(item.amount);
    
            if (item.category in categoryColor) {
                newCats.push(item.category);
                newSliceColours.push(categoryColor[item.category]);
            } else {
                newCats.push('Unknown Category');
                newSliceColours.push(categoryColor.empty);
            }
        });
    
        setSeries(newSeries);
        setSliceColours(newSliceColours);
        setCats(newCats);
    }

    // When transactions get updated convert data for graphing
    React.useEffect(()=>{
        extractGraphData();
        setSpent(sumArray(transactions));
    },[transactions]);

    //When our spending amnt changes update our met goals
    React.useEffect(()=>{
        setMetGoals(getMetGoals());
    }, [spent]);

    const getMetGoals = () => {
        var metGoals = [];
        goals.forEach(goal => {
            if (spent <= goal.goalBal) {
                metGoals.push(goal);
            }
        });
        return metGoals;
    }

    return (
        <View style={styles.container}>     
            <SpendingDisplay style={styles.graph} series={series} sliceColours={sliceColours}/> 
            <FlatList
                style={{
                    alignSelf: 'center',
                    marginBottom: 5,
                    maringTop: 5
                }}
                data={cats}
                renderItem={(item)=>{
                    return(
                        <Text style={{alignSelf:'center'}}>{item.item},{series[item.index]}</Text>
                    )
                }}
            />
            <Text style={{marginTop: 5,alignSelf:'center', fontSize: 20, marginBottom:5}} variant='displaySmall'>Amount Spent: ${spent}</Text>
            <Text style={{alignSelf:'center', fontSize: 20, marginBottom:5}} variant='displaySmall'>Goals Met:</Text>
            <FlatList 
                style={{
                    alignSelf: 'center'
                }}
                data={metGoals}
                renderItem={(item)=>{
                    return(
                        <View style=
                            {{
                                flex:1, 
                                padding:10,
                                marginTop:10,
                                backgroundColor: 'green',
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: 'green'
                            }}
                            >
                            <Text 
                                style={{alignSelf:'center', color: 'white', fontSize: 20, fontWeight: 'bold'}}
                                >{item.item.title}</Text>
                        </View>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    graph: {
        alignSelf: 'center',
        marginTop: 20,
        padding: 10,
        marginBottom: 5
    },
    mainText: {
        alignSelf: 'center',
        fontSize: 20,
    }
});