import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Home} from '../screens/home';
import {Settings} from '../screens/settings';
import {Savings} from '../screens/savings';
import { Spendings } from '../screens/spendings';

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
    return( 
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name='Spendings' component={Spendings} 
                options={{
                tabBarLabel: 'Spendings',
                tabBarIcon: ({color,size}) => (
                    <MaterialCommunityIcons name='currency-usd' color={color} size={size}/>
                ),
            }}
            />
            <Tab.Screen name="Savings" component={Savings}
                options={{
                            tabBarLabel: 'Savings',
                            tabBarIcon: ({color,size}) => (
                                <MaterialCommunityIcons name='cash' color={color} size={size}/>
                            ),
                        }} />
            <Tab.Screen name="Home" component={Home}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({color,size}) => (
                                <MaterialCommunityIcons name='home' color={color} size={size}/>
                            ),
                        }} />
            <Tab.Screen name="Settings" component={Settings}
                        options={{
                            tabBarLabel: 'Settings',
                            tabBarIcon: ({color,size}) => (
                                <MaterialCommunityIcons name='cog' color={color} size={size}/>
                            ),
                        }}/>
      </Tab.Navigator>
    );
}
