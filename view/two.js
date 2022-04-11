//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase(
  {
    name: 'Movies',
    location: 'default',
    createFromLocation: '~www/Movies.db',
  },
  () => {
    console.log('Database Movies Successfully Opened');
  },
  (error) => console.log('Error----- database open', error),
);
// create a component
const Two = () => {
  const [DB, setDb] = useState(db);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log('test two by numbers');
    DB.transaction((tx) => {
      tx.executeSql('SELECT * FROM MoviesDownload;', [], (tx, results) => {
        // console.log('test results', tx, results);
        const rows = results.rows;
        // console.log('test rows---------------', rows);
        let userTable = [];

        for (let i = 0; i < rows.length; i++) {
          userTable.push({
            ...rows.item(i),
          });
        }

        console.log('data available movie table is:', userTable);
        setUsers(userTable);

        // this.setState({ users });
      });
    });
  }, []);

  const InsertRow = () => {
    DB.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO MoviesDownload (ID, Image,Size,Progress,VideoUrl) VALUES (4,'https://db.com',55,100,'https://dbms.mp4')",
        [],
        (tx, results) => {
          console.log('test results update row', results);
          if (results.rowsAffected > 0) {
            Alert.alert('Data Inserted Successfully....');
          } else Alert.alert('Failed TO Insert');
        },
      );
    });
  };

  const updateRow = () => {
    console.log('test Update row is being called');
    DB.transaction((tx) => {
      tx.executeSql(
        'UPDATE MoviesDownload SET Progress = 0 WHERE ID = 4',
        [],
        (tx, results) => {
          console.log('test results Insert data into the Progress', results);
          if (results.rowsAffected > 0) {
            Alert.alert('Data UPDATED Successfully....');
          } else Alert.alert('Failed TO UPDATE');
        },
      );
    });
  };

  const DeleteRow = () => {
    console.log('test Delete row function being called');
    DB.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM MoviesDownload WHERE ID = 4',
        [],
        (tx, results) => {
          console.log('test results Delete data---------@@@--------', results);
          if (results.rowsAffected > 0) {
            Alert.alert('Data DELETED--------------Successfully....');
          } else Alert.alert('Failed.... TO DELETE');
        },
      );
    });
  };

  const AddColumn = () => {
    console.log('test add column function is called');

    DB.transaction((tx) => {
      tx.executeSql(
        'ALTER TABLE MoviesDownload ADD COLUMN WelcomeUrl TEXT',
        [],
        (tx, results) => {
          console.log(
            'test result Data of the add column---------@@@--------',
            results,
            tx,
          );
          // if (results.rowsAffected > 0) {
          //   Alert.alert('column Added--------------Successfully....');
          // } else Alert.alert('Failed.... TO add column');
        },
      );
    });
  };
  return (
    <View style={styles.container}>
      <Text>Two</Text>
      <Button title="insert Data in the table" onPress={() => InsertRow()} />
      <Button title="Update Data in the row" onPress={() => updateRow()} />
      <Button title="Delete Data in the table" onPress={() => DeleteRow()} />
      <Button title="Add column in the table" onPress={() => AddColumn()} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Two;
