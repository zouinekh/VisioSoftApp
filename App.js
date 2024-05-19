import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./routes/homeStack";
import LoginStack from "./routes/loginStack";
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import messaging from '@react-native-firebase/messaging';
import firebase from './Firebase.js'

function App() {
  const Stack = createStackNavigator();
  const store = configureStore();
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const getToken = async () => {
    const token = await messaging().getToken()
    console.log("token", token)
  }
  React.useEffect(() => {
    requestUserPermission();
    getToken();

  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name="loginStack"
            component={LoginStack}
            options={{ headerShown: false }}

          />
          <Stack.Screen
            name="home"
            component={HomeStack}
            options={{ headerShown: false }}

          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
