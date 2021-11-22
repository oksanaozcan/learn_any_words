import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet} from 'react-native';
import LearnWordsScreen from '../screens/LearnWordsScreen';
import AllWordsTreningScreen from '../screens/AllWordsTreningScreen';
import { THEME } from '../theme';

const LearnStack = createNativeStackNavigator();

function LearnStackScreen({}) {  
  return (
    <LearnStack.Navigator screenOptions={{ 
      headerTintColor: THEME.MAIN_COLOR
     }}>
      <LearnStack.Screen name="Learn" component={LearnWordsScreen} 
        options={{
          headerTitle: "Сhoose Words",          
        }}
      />
      <LearnStack.Screen name="TrenAllWords" component={AllWordsTreningScreen} 
        options={{
          headerTitle: "Learning All Words"
        }}
      />              
    </LearnStack.Navigator>
  );
}

const styles = StyleSheet.create({
  
})

export default LearnStackScreen;