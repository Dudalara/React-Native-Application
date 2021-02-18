import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home'
import Register from './pages/Register'
import Course from './pages/ListCourses'
import About from './pages/About'
import Family from './pages/Family'

const Stack = createStackNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registro" component={Register} />
        <Stack.Screen name="Cursos" component={Course} />
        <Stack.Screen name="Sobre" component={About} />
        <Stack.Screen name="Famílias" component={Family} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


