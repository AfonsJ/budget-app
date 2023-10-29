import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../screens/home';
import {Settings} from '../screens/settings';
import {Reminders} from '../screens/reminders';
import {Savings} from '../screens/savings';
import { Spendings } from '../screens/spendings';

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
    return( 
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name='Spendings' component={Spendings} />
            <Tab.Screen name="Savings" component={Savings} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Reminders" component={Reminders}/>
            <Tab.Screen name="Settings" component={Settings}/>
      </Tab.Navigator>
    );
}
