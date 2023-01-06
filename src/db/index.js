import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('catalog.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS catalog ( id INTEGER PRIMARY KEY NOT NULL, photo TEXT NOT NULL) ',
        [],
        ()=> resolve(),
        (_,error)=> reject(error)
      );
    });
  });
  return promise
};

export const insertIntoDb =( photo)=>{
  const promise = new Promise((resolve, reject)=>{
    db.transaction((tx)=>{
      tx.executeSql(
        "INSERT INTO catalog (photo) VALUES (?)",
        [photo],
        (_, result)=>resolve(result),
        (_, error )=> reject(error)
      )
    })
  })
  return promise
}

export const getFromDb =( )=>{
  const promise = new Promise((resolve, reject)=>{
    db.transaction((tx)=>{
      tx.executeSql(
        "SELECT * FROM catalog",
        [],
        (_, result)=>resolve(result),
        (_, error )=> reject(error)
      )
    })
  })
  return promise
}

