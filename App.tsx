/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/home';
import Dashboard from './pages/dash';
import Profil from './pages/apercus';
import Rendez from './pages/rendez';
import Programme from './pages/programme';
import SingIn from './pages/signIn';
import Predications from './pages/predication';
import Icon from 'react-native-vector-icons/FontAwesome';
const Stack = createNativeStackNavigator();
const Tabs= createBottomTabNavigator();

const TabScreen= ()=>(
  
  <Tabs.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Actu') {
              iconName = focused
                ? 'paperclip'
                : 'newspaper-o';
            } else if (route.name === 'Rendez-vous') {
              iconName = focused ? 'bell' : 'bell-o';
            }else if (route.name === 'Predications') {
              iconName = focused ? 'book' : 'chain-broken';
            }else if (route.name === 'Programme') {
              iconName = focused ? 'calendar' : 'calendar-o';
            }else if (route.name === 'Moi') {
              iconName = focused ? 'user' : 'user-o';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}>    
    <Tabs.Screen name='Actu' component={Dashboard}/>
    <Tabs.Screen name='Rendez-vous' component={Rendez}/>
    <Tabs.Screen name='Predications' component={Predications}/>
    <Tabs.Screen name='Programme' component={Programme}/>
    <Tabs.Screen name='Moi' component={SingIn}/>
  </Tabs.Navigator>
);

const App =()=> {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
       <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={TabScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profil"
          component={Profil}
          options={{headerShown: false}}
        />
       </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
