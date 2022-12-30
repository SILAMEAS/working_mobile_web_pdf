import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, LoginScreen, ForgotPasswordScreen} from '@screens/index';
import View_PDF from '@src/screens/Pdf/View_PDF';

const Stack = createStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="View_PDF"
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="View_PDF"
        component={View_PDF}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
