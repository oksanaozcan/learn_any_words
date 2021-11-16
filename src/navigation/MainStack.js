import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import AllWordsScreen from '../screens/AllWordsScreen';
import CategoryScreen from '../screens/CategoryScreen';
import WordScreen from '../screens/WordScreen';

const MainStack = createNativeStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Main" component={MainScreen} 
        options={{
          headerTitle: "Learn Any Words"          
        }}
      />
      <MainStack.Screen name="AllWords" component={AllWordsScreen} />
      <MainStack.Screen name="Category" component={CategoryScreen} />
      <MainStack.Screen name="Word" component={WordScreen} />
    </MainStack.Navigator>
  );
}
export default MainStackScreen;