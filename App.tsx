import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {(props) => <LoginPage {...props}/>}
            </Stack.Screen>
            <Stack.Screen name="Home" options={{ headerShown: false }}>
              {(props) => <HomePage {...props}/>}
            </Stack.Screen>

          </Stack.Navigator>
        </NavigationContainer>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
