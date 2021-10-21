import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Pages/HomeScreen';
import ProfilePage from '../Pages/ProfilePage';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {




    return (
        <NavigationContainer>


            <Stack.Navigator>

                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerStyle: { backgroundColor: '#0CCBE5', elevation: 0 }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'normal', marginLeft: -10, fontSize: 17 } }} />
                <Stack.Screen name="Profile" component={ProfilePage} options={{ title: 'Profile', headerStyle: { backgroundColor: '#0CCBE5', elevation: 0 }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'normal', marginLeft: -10, fontSize: 17 } }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
