import React, {useState} from "react";
import { View, StyleSheet, ScrollView, Image, TextInput, SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";
import TitleText from "../components/TitleText";
import SubText from "../components/SubText";
import Card from "../components/Card";
import MyButton from "../components/MyButton";
import { THEME } from "../theme";

const AddWordScreen = ({}) => {
  const [newWord, setNewWord] = useState('')

  const saveWordHandler = () => {
    console.log("save word handler")
  }
  return(    
    <SafeAreaView>
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>   
      <View>    
      <View style={styles.container}>
      <TitleText titleStyle={styles.titleStyle}>Add New Word for learning</TitleText>
      </View>
    <View style={styles.wrap}> 
      <View style={styles.imgIconsWrap}>
        <Image style={styles.img} source={{uri: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg'}}/>                
      </View>              
      <Card>
        <SubText>word:</SubText>    
        <TextInput style={styles.textinput} 
          placeholder="Enter New Word" 
          value={newWord} 
          onChangeText={setNewWord}
        />            
        <SubText >translate:</SubText>    
        <TextInput style={styles.textinput}/>                 
      </Card>        
      <Card>
        <SubText>synonims:</SubText>          
        <TextInput style={styles.textinput}/>              
        <SubText >category:</SubText>         
        <TextInput style={styles.textinput}/>               
      </Card>      
      <Card>
        <SubText>example:</SubText>          
        <TextInput style={styles.textinput}/>         
        <SubText >translate example:</SubText>
        <TextInput style={styles.textinput}/>                
      </Card>        
    </View>
    <View style={styles.btnContainer}>
      <MyButton title="cansel" onPress={() => {}} color={THEME.GREY_COLOR}/>
      <MyButton title="add word" onPress={saveWordHandler} color={THEME.GREEN_COLOR}/>
    </View>    
    </View>
    </TouchableWithoutFeedback>
    </ScrollView>    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center'
  },
  wrap: {
    padding: 20,
    alignItems: 'center'    
  },
  titleStyle: {
    textAlign: 'center'
  },
  img: {
    width: '50%',
    height: 90
  },   
  imgIconsWrap: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'flex-end',    
    justifyContent: 'space-between'
  },
  iconsContainer: {
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-between'
  },  
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15
  },
  headericonContainer: {
    flexDirection: 'row',
    width: 65,
    justifyContent: 'space-between'
  },
  textinput: {
    padding: 10,
    paddingLeft: 30,   
  }
 
})

export default AddWordScreen;
