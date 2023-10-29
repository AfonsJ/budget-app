import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveState = async (state) => {
    try {
        const stringedState = JSON.stringify(state);
        
        await AsyncStorage.setItem('state', stringedState);
    } catch (error) {
        console.log(error);
    }
}

export const loadState = async () => {
    try {    
        const stringedState = await AsyncStorage.getItem('state');
        
        return JSON.parse(stringedState);
    } catch(error){
        console.log(error);
        
        return undefined;
    }
}