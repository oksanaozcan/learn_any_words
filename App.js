import { bootstrap } from './src/bootstrap';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import MainScreen from './src/screens/MainScreen';

const MainStack = createNativeStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false)
  if (!isReady) {
    return (
      <AppLoading 
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)} 
        onError={err => console.log(err)}
      />
    )
  }
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Main" component={MainScreen}/>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}