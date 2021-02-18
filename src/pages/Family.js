
import React from 'react';
import { StyleSheet, Text, View, TextInput, Switch} from 'react-native';



import List from '../components/ListFamily';


export default function Family(props) {
  return (
    <View style={styles.container}>
      <List />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth:2,
  },
  title: {
    flex:0.1,
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center'
  },

  label: {
    fontSize: 15,
    width: 300,
    flex: 0.05,
  },
  
});
