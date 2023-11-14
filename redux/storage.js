import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveState = async (state) => {
    try {
        const stringedState = JSON.stringify(state);
        console.log("saving",stringedState);
        await AsyncStorage.setItem('state', stringedState);
    } catch (error) {
        console.log("error saving state",error);
    }
}

export const loadState = async () => {
    try {    
        const stringedState= await AsyncStorage.getItem('state');

        if(stringedState == null){
            return undefined;
        }
        
        return JSON.parse(stringedState);
    } catch(error){
        console.log("error loading previous state",error);
        return undefined;
    }
}