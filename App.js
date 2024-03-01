import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./routes/homeStack";

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="feed"
          component={HomeStack}
          options={{ headerShown: false }}

        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
