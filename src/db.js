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

  static createWord({word, translate, img, synonims, category, example, tr_example, date}) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO words (word, translate, img, synonims, category, example, tr_example, favorite, learned, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [word, translate, img, synonims, category, example, tr_example, 0, 0, date],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        )
      })
    })
  }

  static updateFavorite(word) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'UPDATE words SET favorite = ? WHERE id = ?',
          [word.favorite ? 0 : 1, word.id],
          resolve,
          (_, error) => reject(error)
        )
      })
    })    
  }

  static updateLearned(word) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'UPDATE words SET learned = ? WHERE id = ?',
          [word.learned ? 0 : 1, word.id],
          resolve,
          (_, error) => reject(error)
        )
      })
    })    
  }

  static removeWord(id) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM words WHERE id = ?',
          [id],
          resolve,
          (_, error) => reject(error)
        )
      })
    })    
  }
}

export default DB;