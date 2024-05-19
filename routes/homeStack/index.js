import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Home from '../../screens/home';

function HomeStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Calendar"
                component={Home}
                options={{ headerShown: true }}
            />

        </Stack.Navigator>
    )
}

export default HomeStack