import { StyleSheet } from 'react-native';
import {AppNavigation} from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme,  PaperProvider } from 'react-native-paper';

import storeConfig from './redux/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

const theme = {
  ...DefaultTheme, 
  colors: {
    ...DefaultTheme.colors,
    primary: '#00796B',
    accent: '#E0F2F1',
    positive: '#8BC34A',
    negative: '#FF5722',
    bttn: '#00ACC1',
    text: '#2C3E50'
  }
}


export default function App() { 
  const [store,setStore] = useState(null);

  useEffect(() => {
    const initStore = async () => {
      const storeToSet = await storeConfig();
      setStore(storeToSet);
    }

    initStore();
  },[]);

  if(store == null){
    // where loading screen would be
    return null; 
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer style={styles.container}>
            <AppNavigation />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
