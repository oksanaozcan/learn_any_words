import React, {useState} from "react";
import { View, StyleSheet, ScrollView, TextInput, SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useDispatch } from "react-redux";
import TitleText from "../components/TitleText";
import SubText from "../components/SubText";
import Card from "../components/Card";
import MyButton from "../components/MyButton";
import { THEME } from "../theme";
import { addWord } from "../store/actions/wordAction";
import PhotoPicker from "../components/PhotoPikcer";

const AddWordScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const [newWord, setNewWord] = useState('')
  const [img, setImg] = useState(null)
  const [newTranslate, setNewTranslate] = useState('')
  const [synonims, setSynonims] = useState('')
  const [newCategory, setNewCategory] = useState('')
  const [newExample, setNewExample] = useState('')
  const [newTranslateEx, setNewTranslateEx] = useState('')

  const photoPickerHandler = uri => {    
    setImg(uri)
  }

  const saveWordHandler = () => {
    const myWord = {
      word: newWord,
      img: img,
      translate: newTranslate,
      synonims: synonims,
      category: newCategory,
      example: newExample,
      tr_example: newTranslateEx,
      favorite: false,
      learned: false,
      date: new Date().toJSON()
    }
    dispatch(addWord(myWord))
    setNewWord('')    
    setNewTranslate('')
    setSynonims('')
    setNewCategory('')
    setNewExample('')
    setNewTranslateEx('')
    navigation.navigate("AllWords")
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
      <PhotoPicker photoPickerHandler={photoPickerHandler} />                
      </View>              
      <Card>
        <SubText>word*:</SubText>    
        <TextInput style={styles.textinput} 
          placeholder="Enter New Word" 
          value={newWord} 
          onChangeText={setNewWord}
        />            
        <SubText >translate:</SubText>    
        <TextInput style={styles.textinput} 
          placeholder="Enter translate"
          value={newTranslate}
          onChangeText={setNewTranslate}
          multiline
        />                 
      </Card>        
      <Card>
        <SubText>synonims:</SubText>          
        <TextInput style={styles.textinput} 
          placeholder="Enter synonims"
          value={synonims}
          onChangeText={setSynonims}
          multiline
        />              
        <SubText >category:</SubText>         
        <TextInput style={styles.textinput} 
          placeholder="Enter category"
          value={newCategory}
          onChangeText={setNewCategory}
        />               
      </Card>      
      <Card>
        <SubText>example:</SubText>          
        <TextInput style={styles.textinput} 
          placeholder="Enter example"
          value={newExample}
          onChangeText={setNewExample} 
          multiline
        />         
        <SubText >translate example:</SubText>
        <TextInput style={styles.textinput} 
          placeholder="Enter translate example"
          value={newTranslateEx}
          onChangeText={setNewTranslateEx} 
          multiline
        />                
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
