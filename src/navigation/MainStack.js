import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import MainScreen from '../screens/MainScreen';
import AllWordsScreen from '../screens/AllWordsScreen';
import CategoryScreen from '../screens/CategoryScreen';
import WordScreen from '../screens/WordScreen';
import { THEME } from '../theme';
import { View, StyleSheet } from 'react-native';
import EditWordScreen from '../screens/EditWordScreen';

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
      <MainStack.Screen name="Category" component={CategoryScreen} />
      <MainStack.Screen name="Word" component={WordScreen} 
        options={{
          title: 'Details',
          headerRight: (props) => (
            <View style={styles.btnContainer}>
              <Ionicons name="pencil-outline" size={25} color={THEME.MAIN_COLOR} {...props} onPress={() => navigation.navigate('Edit')}/>
              <Ionicons name="trash-outline" size={25} color={THEME.MAIN_COLOR} {...props}/>
            </View>            
          ),
        }}
      />
      <MainStack.Screen name={'Edit'} component={EditWordScreen}/>
    </MainStack.Navigator>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    width: 65,
    justifyContent: 'space-between'
  }
})

export default MainStackScreen;