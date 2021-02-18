import React from 'react';
import { StyleSheet, SafeAreaView, SectionList, View, Text } from 'react-native';


import course from '../services/courses'

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text style = {styles.fonts} >{item.nome}</Text>

  </View>
)


export default function ListCourses(props) {
 

  return (
    <SafeAreaView style={styles.container}>
       <SectionList 
      sections={course}
      keyExtractor={ (item) => item.id.toString() }
      renderItem = {({item}) => <Item item = {item}/>}
      renderSectionHeader = {({section: {type}}) => (
        <Text style = {styles.title} >{type}</Text>
    )}
      /> 
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center'
   
    
  },
  title: {
    margin: 30,
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center'
    
  },
  fonts: {
    
    flex: 1,
    fontSize: 18,
  
   
    
  },
  
  
  
});
