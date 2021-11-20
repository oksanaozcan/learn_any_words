import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('learnwords.db')

class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS words (id INTEGER PRIMARY KEY NOT NULL, word TEXT NOT NULL, translate TEXT, img TEXT, synonims TEXT, category TEXT, example TEXT, tr_example TEXT, favorite INT, learned INT, date TEXT)',
          [],
          resolve,
          (_, error) => reject(error)
        )
      })
    })    
  }

  static getWords() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM words', 
          [], 
          (_, result) => resolve(result.rows._array), 
          (_, error) => reject(error)
        )
      })
    })
  }
}

export default DB;