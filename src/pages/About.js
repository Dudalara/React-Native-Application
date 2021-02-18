
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';




export default function Register(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o projeto</Text>
      <View >
          <Text style={styles.text} >
          Projeto Paixão pela Vida
          Rua Professor Becker, 3850- Santa Cruz
          Guarapuava - Paraná - Brasil
          </Text>
       
      </View>
      <MapView  style={styles.map}
      
      initialRegion={{
        latitude: -25.407147,
        longitude: -51.473640,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
      <Marker
         coordinate={{
            latitude: -25.407147,
            longitude: -51.473640,
        }}
        title='Projeto Paixão Pela Vida'
      />
      
      </MapView>
      
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
    bottom: 150,
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center'
  },
  map: {
    width: 380,
    height: 300,
    
    
  },
  text: {
    fontSize: 15,
    width: 300,
    bottom: 50,
    textAlign: 'center'
    
  },
  
});
