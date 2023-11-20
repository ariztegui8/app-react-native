// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, ScrollView, Button, Pressable, Modal, Alert, SafeAreaView } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './component/HomeScreen';
// import AboutScreen from './component/AboutScreen';



// export default function App2() {

//   const Stack = createNativeStackNavigator()
//   return (
//     <>

//     <NavigationContainer>
//       <Stack.Navigator 
//         initialRouteName='Home'
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#6a51ae'
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold'
//           },
//           headerRight: ()=>(
//             <Pressable onPress={()=> alert('Menu button pressed')}>
//               <Text style={{color: '#fff', fontSize: 16}}>Menu</Text>
//             </Pressable>
//           ),
//           contentStyle: {
//             backgroundColor: '#e8e4f3'
//           }
//         }}
//       >
//         <Stack.Screen 
//           name='Home' 
//           component={HomeScreen}
//           options={{
//             title: 'Welcome to Home',
//           }}
//         />
//         <Stack.Screen 
//           name='About' 
//           component={AboutScreen}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>

//     </>
//   );
// }



// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawer } from '@react-navigation/native-stack';
// import 'react-native-gesture-handler';
// import DashboardScreen from './component/DashboardScreen';
// import SettingScreen from './component/SettingScreen';
// import { createDrawerNavigator } from '@react-navigation/drawer';



// export default function App() {

//   const Drawer = createDrawerNavigator()
//   return (
//     <>

//     <NavigationContainer>
//     <Drawer.Navigator>
//       <Drawer.Screen 
//         name="Dashboard" 
//         component={DashboardScreen} 
//         options={{
//           title: 'My dashboard',
//           drawerLabel: 'Dashboard',
//           drawerActiveTintColor: '#333',
//           drawerActiveBackgroundColor: 'skyblue',
//           drawerContentStyle: {
//             backgroundColor: '#c3de33'
//           }
//         }}
//       />
//       <Drawer.Screen
//         name="Setting" 
//         component={SettingScreen} 
//         />
//     </Drawer.Navigator>
//     </NavigationContainer>

//     </>
//   );
// }

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './component/HomeTab';
import SettingTab from './component/SettingTab';
import ImgTab from './component/ImgTab';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AboutStack } from './component/AppStack';

export default function App() {

  const Tab = createBottomTabNavigator();
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelPosition: 'below-icon',
            tabBarShowLabel: true,
            tabBarActiveTintColor: 'purple'
          }}
        >
          <Tab.Screen 
            name="HomeTab" 
            component={HomeTab} 
            options={{
              tabBarLabel: 'My Home',
              tabBarIcon: ()=>   <Ionicons name="ios-checkmark-circle" size={30} color="green" />,
              tabBarBadge: 3
            }}
          />
          <Tab.Screen 
            name="SettingTab" 
            component={SettingTab} 
          />
          <Tab.Screen 
            name="ImgTab" 
            component={ImgTab} 
          />
          <Tab.Screen 
            name="AboutStack" 
            component={AboutStack}
            options={{
              headerShown: false
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>

    </>
  );
}
