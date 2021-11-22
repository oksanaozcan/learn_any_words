import { bootstrap } from './src/bootstrap';
import { Provider } from 'react-redux'
import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import MainStackScreen from './src/navigation/MainStack';
import LearnStackScreen from './src/navigation/LearnStack';
import AddWordScreen from './src/screens/AddWordScreen';
import {THEME} from './src/theme';
import store from './src/store';

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
    <Provider store={store} >
    <NavigationContainer>      
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          headerTintColor: THEME.MAIN_COLOR,          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'MainStack') {
              iconName = focused
                ? 'albums'
                : 'albums-outline';
            } else if (route.name === 'LearnStack') {
              iconName = focused ? 'rocket' : 'rocket-outline';
            }  else if (route.name === 'AddWord') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: THEME.GREEN_COLOR,
          tabBarInactiveTintColor: THEME.GREY_COLOR,
        })}
      >
        <Tab.Screen name="MainStack" component={MainStackScreen} options={{title: "Categories", headerShown: false}}/>
        <Tab.Screen name="LearnStack" component={LearnStackScreen} options={{headerShown: false}}/>
        <Tab.Screen name="AddWord" component={AddWordScreen} 
          options={{
            headerTitle: "Add New Word",
            title: 'Add Word'
          }}
        />
      </Tab.Navigator>   
    </NavigationContainer>
    </Provider>
  );
}