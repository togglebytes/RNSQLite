//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'mainDB',
    location: 'default',
    createFromLocation: '~www/mainDB.db',
  },
  () => {
    console.log('Database Successfully Opened');
  },
  (error) => console.log('Error----- database open', error),
);
// create a component
const One = (props) => {
  const [DB, setDb] = useState(db);
  const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   DB.transaction((tx) => {
  //     tx.executeSql('SELECT * FROM users;', [], (tx, results) => {
  //       // console.log('test results', tx, results);
  //       const rows = results.rows;
  //       // console.log('test rows---------------', rows);
  //       let userTable = [];

  //       for (let i = 0; i < rows.length; i++) {
  //         userTable.push({
  //           ...rows.item(i),
  //         });
  //       }

  //       console.log('data available user table is:', userTable);
  //       setUsers(userTable);

  //       // this.setState({ users });
  //     });
  //   });
  // }, []);

  const update_Data = () => {
    console.log('test db Update Contact Number------');
    DB.transaction((tx) => {
      tx.executeSql(
        " UPDATE users SET ContactNo = '8055230642' WHERE ID = 5  ",
      );
    });
  };

  // const InsertData = () => {
  //   DB.transaction((tx) => {
  //     tx.executeSql(
  //       " UPDATE users SET ContactNo = '8055230642' WHERE ID = 5  ",
  //     );
  //   });
  // };

  // const seeDatabase = () => {
  //   console.log('test db created', db);
  // };
  return (
    <View style={styles.container}>
      {/* {users.map((user) => (
        <Text>{user.Name}</Text>
      ))} */}
      <Button title="Update data database" onPress={() => update_Data()} />
      <Button title="Next" onPress={() => props.navigation.navigate('Two')} />

      {/* <Button title="Insert data" /> */}
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
export default One;
