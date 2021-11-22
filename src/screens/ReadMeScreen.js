import React, {useState, useLayoutEffect} from "react";
import { SafeAreaView, ScrollView, View, Button} from "react-native";
import CommonText from "../components/CommonText";
import TitleText from "../components/TitleText";

const ReadMeScreen = ({navigation}) => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return(
    <SafeAreaView>
    <ScrollView>
    <View>
      <CommonText>Здесь в будузем будет небольшая инфа и приложении и инструкция к нему. А сейчас буду сюда вписывать задачи и проблемы которые нужно будет не забыть решить</CommonText>
      <View>
        <TitleText>Problems: </TitleText>        
        <CommonText> 1 может добавить фильтры посмотрим</CommonText>
        <CommonText> 2 изменить этот скрин </CommonText>
        <CommonText>Count: {count}</CommonText>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default ReadMeScreen;