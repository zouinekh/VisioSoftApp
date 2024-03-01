import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Home from '../../screens/home';

function HomeStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator >
            <Stack.Screen
                name="home"
                component={Home}
             
            />

        </Stack.Navigator>
    )
}

export default HomeStack