
import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text,} from 'react-native';

import Registers from '../services/sqlite/Register'


const Item = ({ item }) => (
  <View style={styles.item}>
    <Text style = {styles.fonts} >Responsável: {item.name}</Text>
    <Text style = {styles.fonts} >Data de nascimento: {item.date}</Text>
    <Text style = {styles.fonts} >RG: {item.rg}</Text>
    <Text style = {styles.fonts} >{item.family} membros na família</Text>
    <Text style = {styles.fonts} >{item.address}</Text>
    <Text style = {styles.fonts} >Cep: {item.cep}</Text>
    
    
  </View>
)
 


export default function ListDonation(props) {
  const [families, setFamilies] = React.useState([]);
  React.useEffect ( () => {
    Registers.all()
       .then( (response) => {
       setFamilies(response);
       });
  },[] );

  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.title}> Famílias cadastradas </Text>
      <FlatList 
      data={families}
      
      renderItem = {({item}) => <Item item = {item}/>}
      keyExtractor={ (item) => item.id.toString() }
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
  fonts: {
    fontSize: 20,
    textAlign: 'left',
    display: 'flex',
    flexDirection:'column',
    
  },

  item:{
    width: 350,
    backgroundColor: '#C0C0C0',
    borderRadius: 5,
    borderWidth: 2,
    padding: 5,
    
  },

  title: {
    fontSize: 25,
    flex: 0.2,
    fontWeight:'bold',
    
  },
  
  
  
});
