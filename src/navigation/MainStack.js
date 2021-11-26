import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import MainScreen from '../screens/MainScreen';
import AllWordsScreen from '../screens/AllWordsScreen';
import CategoryScreen from '../screens/CategoryScreen';
import WordScreen from '../screens/WordScreen';
import { THEME } from '../theme';
import { View, StyleSheet} from 'react-native';
import EditWordScreen from '../screens/EditWordScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import LearnedScreen from '../screens/LearnedScreen';
import ReadMeScreen from '../screens/ReadMeScreen';

const MainStack = createNativeStackNavigator();

function MainStackScreen({navigation}) {  

  return (
    <MainStack.Navigator screenOptions={{ 
      headerTintColor: THEME.MAIN_COLOR
     }}>
      <MainStack.Screen name="Main" component={MainScreen} 
        options={{
          headerTitle: "Learn Any Words"
        }}
      />
      <MainStack.Screen name="AllWords" component={AllWordsScreen} 
        options={{
          title: "All Words"
        }}
      />
      <MainStack.Screen name="Favorite" component={FavoriteScreen} 
        options={{
          title: "Favorite"
        }}
      />      
      <MainStack.Screen name="Learned" component={LearnedScreen} 
        options={{
          title: "Learned words"
        }}
      />     
      <MainStack.Screen name="Category" component={CategoryScreen} 
        options={({route}) => ({
          title: `${route.params.openCategory} category`
        })}
      />      
      <MainStack.Screen name="Word" component={WordScreen} 
        options={({route}) => ({
          title: `${route.params.word} details`,                 
        })}          
      />
      <MainStack.Screen name={'Edit'} component={EditWordScreen}/>
      <MainStack.Screen name="ReadMe" component={ReadMeScreen} 
        options={({route}) => ({
          title: 'Read Me'
        })}
      />      
    </MainStack.Navigator>
  );
}

const styles = StyleSheet.create({
  
})

export default MainStackScreen;