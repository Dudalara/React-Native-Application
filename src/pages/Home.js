

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import ActionSheet from 'react-native-actionsheet';

export default function Home(props) {

  let _actionSheet = null;

  const about = (index) => {
    if(index == 1){
      props.navigation.navigate('Famílias');
    }
    if(index == 2){
      props.navigation.navigate('Registro')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projeto Paixão Pela Vida</Text>
      <Image
        source={require("../../assets/images/logo.jpg")}
        style={styles.img}
      />
      <View style= {styles.buttons}>
       <TouchableOpacity
          style= {styles.button}
          onPress = {() =>_actionSheet.show()}>
         <Text style= {styles.text}>Famílias </Text>
         </TouchableOpacity>
         <TouchableOpacity
          style= {styles.button}
          onPress = {() => {props.navigation.navigate('Cursos')}}>
         <Text style= {styles.text}>Cursos ofertados</Text>
         </TouchableOpacity>
         <TouchableOpacity
          style= {styles.button}
          onPress = {() => {props.navigation.navigate('Sobre')}}>
         <Text style= {styles.text}> Sobre</Text>
         </TouchableOpacity>
         </View>
      
         
         <ActionSheet 
            ref= { ref => _actionSheet = ref}
            options = {['Cancelar', 'Famílias Cadastradas', 'Cadastro de famílias']}
            onPress = { (index) => {about(index)}}
            cancelButtonIndex = {0}
         />
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
  buttons: {
    flexDirection: 'row',
    width:380,
    marginTop:50,
    top:50,
  },
  button: {
    flex:1,
    backgroundColor:'#C0C0C0',
    margin: 3,
    borderRadius: 5,
    
  },
  text: {
    padding: 2,
    textAlign:'center',
    fontWeight:'bold',
    fontSize: 15,
    
  },
  img: {
  
    width: 250,
    height: 200,
    resizeMode:'stretch',
    
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'#808080',
    lineHeight:60,
    bottom: 100,
  },
});
