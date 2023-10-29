import { StyleSheet, Text, Modal, Pressable, View, TextInput } from "react-native";
import { CreateTransaciton } from "./CreateTransaciton";

export const TransactionModal = (props) => {
    return (
        <View>
            <Modal 
                animationType="fade"
                transparent={true}
                onRequestClose={() => {
                    props.closeModal()
                }}
                visible={props.modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <CreateTransaciton style={styles.transactionInfo}/>
                        <Pressable onPress={()=>{props.closeModal()}} style={styles.button}> 
                            <Text style={{fontWeight:'300', alignSelf: 'center'}}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex:1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalView:{
        padding: 20,
        backgroundColor: 'lightcyan',
        width: 350,
        height: 175
    },
    button: {
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 35,
        paddingBottom: 2
    },
    transactionInfo:{
        alignContent: 'center',
        alignItems: 'center',
        padding: 0
    }
});