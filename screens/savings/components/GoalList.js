import * as React from "react";
import { View, ScrollView, StyleSheet, SafeAreaView, Dimensions, FlatList, Pressable, TouchableOpacity } from "react-native";
import {Divider, Text, Card, DataTable} from 'react-native-paper'

import { useSelector } from "react-redux";

export const GoalList = ({setAnchor}) => {
    const goals = useSelector(state => state.goals.goals);

    return(
        <SafeAreaView style={styles.container}>
                <FlatList
                    data={goals}
                    renderItem={(item)=>{
                            return(
                                <Pressable style={{flex:1, padding:10, marginTop:10, borderColor: 'black', borderStyle: 'solid', borderRadius: 10, borderWidth: 2}}
                                    onLongPress={(e) => {   
                                        setAnchor(e.nativeEvent, item.item.key);
                                    }}
                                    >
                                    <Text style={styles.goalText}>{item.item.title}</Text>
                                    <Text style={{alignSelf:'center'}}>{'$' + item.item.goalBal}</Text>
                                </Pressable>
                            )
                        }
                    }
                    keyExtractor={item => item.key}
                >
                </FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 6
    },
    goalText:{
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 10
    }
});