import React from 'react';
import { StyleSheet, StatusBar} from 'react-native';


import Routes from './src/route'

export default function App() {
  return (
    <>
     <StatusBar 
     hidden={true}
     />
    
      <Routes />
     
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
