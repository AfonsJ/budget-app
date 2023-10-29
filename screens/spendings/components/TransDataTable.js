import * as React from "react";
import { View, ScrollView, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import {Divider, Text, DataTable} from 'react-native-paper'

import { useSelector } from "react-redux";

export const TransDataTable = ({setAnchor}) => {
    const pageOpts = [10, 15, 30]
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(pageOpts[0]);

    const transactions = useSelector(state=>state.transactions.trans);

    const categories = {
        "eatingOut": 'Eating Out',
        "rent": 'Rent/Housing',
        "medical":'Medical',
        "grocery": 'Grocery',
        "utilities": 'Utilities',
        "transportation": 'Transportation',
        "clothes": 'Clothes',
        "personalSpending": 'Personal Spending',
        "entertainment": 'Entertainment',
        "investments": 'Investments',
        "misc": 'Misc.'
    }

    const from = page * itemsPerPage;
    const to = Math.min((page+1) * itemsPerPage, transactions.length);

    const niceDate = (date) => {
        const dateObj = new Date(date);
        const y = (dateObj.getFullYear()).toString();
        const m = (dateObj.getMonth()).toString();
        const d = (dateObj.getDate()).toString();

        return (y+"/"+m+"/"+d);
    }

    React.useEffect(()=> {
        setPage(0);
    }, [itemsPerPage]);

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <DataTable style={{width: Dimensions.get('window').width}}>
                    <DataTable.Header>  
                        <DataTable.Title>Title</DataTable.Title>
                        <Divider/>
                        <DataTable.Title>Category</DataTable.Title>
                        <Divider/>
                        <DataTable.Title>Date</DataTable.Title>
                        <Divider/>
                        <DataTable.Title style={{right:1}}>Amount</DataTable.Title>
                    </DataTable.Header>
                        
                    {transactions.map((item) => {
                        if(item){
                            return(
                                <DataTable.Row key={item.key} onLongPress={(e) => {
                                    setAnchor(e.nativeEvent, item.key)}}>
                                    <View/>
                                    <View style={{
                                        flex:1,
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <Text>{item.title}</Text>
                                    </View>
                                    <DataTable.Cell>{categories[item.category]}</DataTable.Cell>
                                    <DataTable.Cell>{niceDate(item.key)}</DataTable.Cell>
                                    <DataTable.Cell numeric={true}>{"$"+item.amount}</DataTable.Cell>
                                </DataTable.Row>
                            )
                        }
                    })}

                    <DataTable.Pagination 
                        page={page}
                        numberOfPages={Math.ceil(transactions.length/itemsPerPage)}
                        onPageChange={(page) => setPage(page)}
                        label={`${from + 1}-${to} of ${transactions.length}`}
                        numberOfItemsPerPageList={pageOpts}
                        numberOfItemsPerPage={itemsPerPage}
                        onItemsPerPageChange={setItemsPerPage}
                        selectPageDropdownLabe={"Transactions per page"}
                    />
                </DataTable>
            </ScrollView>
        </SafeAreaView>
    )
}

/*
    <DataTable.Cell style={{flex:3}}>{item.title}</DataTable.Cell>
    <DataTable.Cell style={{flex:2}}>{categories[item.category]}</DataTable.Cell>
    <DataTable.Cell style={{flex:1}}>{niceDate(item.date)}</DataTable.Cell>
    <DataTable.Cell numeric={true}>{item.amount}</DataTable.Cell>
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 6
    } 
});