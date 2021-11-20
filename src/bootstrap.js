import * as Font from 'expo-font';
import DB from './db';

export async function bootstrap() {
  try {
    await Font.loadAsync({
      OpenBold: require('../assets/fonts/OpenSans-Bold.ttf'),
      OpenReg: require('../assets/fonts/OpenSans-Regular.ttf')
    })
    await DB.init()
    console.log("database started")

  } catch(e) {
    console.log(e)
  }  
}