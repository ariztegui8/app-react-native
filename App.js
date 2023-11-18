import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, Pressable, Modal, Alert, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import DashboardScreen from './component/DashboardScreen';
import SettingScreen from './component/SettingScreen';



export default function App() {

  const Drawer = createNativeStackNavigator()
  return (
    <>

    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
    </NavigationContainer>

    </>
  );
}
