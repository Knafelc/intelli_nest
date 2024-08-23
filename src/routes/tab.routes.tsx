import 'react-native-gesture-handler';
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'
import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import Home from "../screens/new";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: '#2266ff',
            }}
        >
            <Tab.Screen
                name="Hardware"
                component={Feed}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="cpu" color={color} size={size} />,
                    tabBarLabel: "Hardware",
                }}
            />
            <Tab.Screen
                name="Início"
                component={Home}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size} />,
                    tabBarLabel: "Home",
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="user" color={color} size={size} />,
                    tabBarLabel: "Perfil",
                }}
            />
        </Tab.Navigator>
    )
}