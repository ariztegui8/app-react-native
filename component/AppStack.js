import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, Pressable, Modal, Alert, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../component/HomeScreen';
import AboutScreen from '../component/AboutScreen';

const Stack = createNativeStackNavigator()

export const AboutStack = () => {
    return <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerStyle: {
                backgroundColor: '#6a51ae'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerRight: () => (
                <Pressable onPress={() => alert('Menu button pressed')}>
                    <Text style={{ color: '#fff', fontSize: 16 }}>Menu</Text>
                </Pressable>
            ),
            contentStyle: {
                backgroundColor: '#e8e4f3'
            }
        }}
    >
        <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
                title: 'Welcome to Home',
            }}
        />
    </Stack.Navigator>
}

export default function AppStack() {


    return (
        <>

            <NavigationContainer>
                <AboutStack />
            </NavigationContainer>

        </>
    );
}