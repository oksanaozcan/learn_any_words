import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import AllWordsScreen from '../screens/AllWordsScreen';
import CategoryScreen from '../screens/CategoryScreen';

const MainStack = createNativeStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Main" component={MainScreen} 
        options={{
          headerTitle: "Learn Any Words",
          title: 'Categories'
        }}
      />
      <MainStack.Screen name="AllWords" component={AllWordsScreen} />
      <MainStack.Screen name="Category" component={CategoryScreen} />
    </MainStack.Navigator>
  );
}
export default MainStackScreen;