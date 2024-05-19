import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Login from '../../screens/login';

function LoginStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator >
            <Stack.Screen
                name="login"
                component={Login}
                options={{ headerShown: false }}

            />

        </Stack.Navigator>
    )
}

export default LoginStack