import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, Pressable, StyleSheet,FlatList, TouchableOpacity, ScrollView } from 'react-native';
import {TransactionModal} from './components/TransactionModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AnimatedFAB, Menu, Modal } from 'react-native-paper';
import {TransDataTable} from './components/TransDataTable';

import { useSelector,useDispatch } from 'react-redux';
import { addTransaction, removeTransaction } from '../../redux/transactionSlice';

export const Spendings = () => {
    const [modalVisible, setModalVisable] = React.useState(false);
    const [menuVisible, setMenuVisable] = React.useState(false);
    const [menuAnchor, setMenuAnchor] = React.useState({x:0,y:0});
    const [menuKey, setMenuKey] = React.useState(0);

    const transactions = useSelector(state=>state.transactions.trans);
    const dispatch = useDispatch();

    //Function for closing modal
    const closeTransactionModal = () => {
        setModalVisable(false);
    }
    
    //Functions for menu
    const openMenu = () => {
        setMenuVisable(true);
    }

    const closeMenu = () => {
        setMenuVisable(false);
    }

    //Anchors the menu popup relative to where the user presses
    //Credit for idea Gist : c7c257f8e214bc52ff530463aa2e16dc 
    const setAnchor = (evt,key)=> {
        const anchor = {
            x: evt.pageX,
            y: evt.pageY
        }   
        setMenuKey(key);
        setMenuAnchor(anchor);
        openMenu();
    }

    return (
        <View style={styles.container}>
            <Menu
            visible={menuVisible}
            anchor={menuAnchor}
            onDismiss={closeMenu}
            >
                <Menu.Item title="Delete" onPress={()=>{
                    closeMenu();
                    dispatch(removeTransaction(menuKey));
                    }}/>
            </Menu>

            <TransDataTable setAnchor={setAnchor}/>

            <Modal onDismiss={closeTransactionModal} visible={modalVisible} contentContainerStyle={styles.modalView}>
                <TransactionModal closeModal={closeTransactionModal}/>
            </Modal>

            <AnimatedFAB 
                icon={'plus'} 
                label={'Add'} 
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
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView:{
        flex: 1,
        padding: 60,
        backgroundColor: 'Cyan',
        alignSelf: 'center'
    },
    dataTable: {
        top: 0,
        position:'absolute',
        justifyContent:'center'
    },
    title : {
        fontWeight: 'bold',
        fontSize: 10
    },
    smallText: {
        fontWeight: 'normal',
        fontSize: 5
    },
    fabStyle: {
        bottom: 10,
        right: 10,
        position: 'absolute'
    }
});
