import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackRouter, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import onBoarding_screen1 from './screen/onBoarding_screen1';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
  <NavigationContainer style={styles.container}>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboard" component={Onboard} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});