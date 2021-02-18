
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

import Registers from '../services/sqlite/Register'

export default function Register(props) {
  const [name, setName] = React.useState('');
  const [date, setDate] = React.useState('');
  const [rg, setRg] = React.useState('');
  const [family, setFamily] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [cep, setCep] = React.useState('');
 

  const register = () => {
    Registers.create( {name:name , date:date , rg:rg , family:family , address:address , cep:cep} )
    .then( id => console.log('Register created with id: '+ id) )
    .catch( err => console.log(err) )
       Alert.alert('Cadastro realizado com sucesso');

  }
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Identificação</Text>
      <Text style={styles.label}>Nome do responsável</Text>
      <TextInput style={styles.input}
      onChangeText = { text => setName(text)}
      value = {name}
       />
      <Text style={styles.label}>Data de Nascimento</Text>
      <TextInput style={styles.input}
      onChangeText = { text => setDate(text)}
      value = {date}
        />
      <Text style={styles.label}>RG</Text>
      <TextInput style={styles.input}
      onChangeText = { text => setRg(text)}
      value = {rg}
       />
      <Text style={styles.label}>Número de pessoas na casa</Text>
      <TextInput style={styles.input}
      onChangeText = { text => setFamily(text)}
      value = {family}
       />
      <Text style={styles.title}>Moradia</Text>
      <Text style={styles.label}>Endereço</Text>
      <TextInput style={styles.input}
       onChangeText = { text => setAddress(text)}
       value = {address}
       />
      <Text style={styles.label} >Cep</Text>
      <TextInput style={styles.input}
       onChangeText = { text => setCep(text)}
       value = {cep}
       />
       <Button 
        style={styles.button}
        title='Cadastrar'
        color='#C0C0C0'
        onPress={() => register()}/>
   

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
  input: {
    borderWidth: 2,
    width: 300,
    height: 40,
    borderRadius: 5,
    
    padding: 10,
    
  },
  label: {
    fontSize: 15,
    width: 300,
    flex: 0.05,
  },

  button: {
    
  },
  
});
