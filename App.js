import { bootstrap } from './src/bootstrap';
import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import MainStackScreen from './src/navigation/MainStack';
import LearnWordsScreen from './src/screens/LearnWordsScreen';
import AddWordScreen from './src/screens/AddWordScreen';
import {THEME} from './src/theme';

const Tab = createBottomTabNavigator();

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
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Main') {
              iconName = focused
                ? 'albums'
                : 'albums-outline';
            } else if (route.name === 'Learn') {
              iconName = focused ? 'rocket' : 'rocket-outline';
            }  else if (route.name === 'AddWord') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: THEME.MAIN_COLOR,
          tabBarInactiveTintColor: THEME.GREY_COLOR,
        })}
      >
        <Tab.Screen name="Main" component={MainStackScreen} options={{title: "Categories", headerShown: false}}/>
        <Tab.Screen name="Learn" component={LearnWordsScreen} />
        <Tab.Screen name="AddWord" component={AddWordScreen} 
          options={{
            headerTitle: "Add New Word",
            title: 'Add Word'
          }}
        />
      </Tab.Navigator>   
    </NavigationContainer>
  );
}