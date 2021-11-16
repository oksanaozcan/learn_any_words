import { bootstrap } from './src/bootstrap';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import MainScreen from './src/screens/MainScreen';
import AllWordsScreen from './src/screens/AllWordsScreen';

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
        <MainStack.Screen name="Main" component={MainScreen} options={{title: "Learn Any Words"}}/>
        <MainStack.Screen name="AllWords" component={AllWordsScreen} options={{title: "All Words"}}/>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}