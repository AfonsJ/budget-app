import * as React from 'react';
import { Button, View, Text } from 'react-native';

export const Settings = () => {
    return(
        <View>
            <Text>This is Where the User will have their various Savings</Text>
            <Button
                title="Home"
                onPress={()=> navigation.navigate('Home')}
                />
        </View>
    );
}