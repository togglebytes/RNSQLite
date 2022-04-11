import React from 'react';
import One from './view/one';
import Two from './view/two';
import Test from './view/test';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RouteStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Two">
        <Stack.Screen name="One" component={One} />
        <Stack.Screen name="Two" component={Two} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouteStack;
