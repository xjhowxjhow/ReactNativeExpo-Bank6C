import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//importar as telas
import Welcome from '../pages/Welcome'


const Stack = createNativeStackNavigator() // Cria a pilha de navegação

import HomeScreen from '../pages/PageMain/HomeScreen'
import ProfileScreen from '../pages/PageMain/ProfileScreen';

const Tab = createBottomTabNavigator();








function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {

                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Cartões') {
                        iconName = focused ? 'card' : 'card-outline';
                    } else if (route.name === 'Saldos') {
                        iconName = focused ? 'wallet' : 'wallet-outline';
                    } else if (route.name === 'C6 Invest') {
                        iconName = focused ? 'bar-chart' : 'bar-chart-outline';
                    } else if (route.name === '+Beneficios') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }


                    return <Ionicons name={iconName} size={size} color={color} />;
                },

                tabBarActiveTintColor: '#d5d5d5',
                tabBarInactiveTintColor: '#636363',
                headerShown: false,
                tabBarLabelStyle: { 
                    color: '#d5d5d5' 
                
                },
                tabBarStyle: { 
                    backgroundColor: '#303030' 
            
            },
            })}

        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,

                }}

            />

            <Tab.Screen
                name="Cartões"
                component={ProfileScreen}
                options={{ headerShown: false }}

            />

            <Tab.Screen
                name="Saldos"
                component={ProfileScreen}
                options={{ headerShown: false }}

            />

            <Tab.Screen
                name="C6 Invest"
                component={ProfileScreen}
                options={{ headerShown: false }}

            />

            <Tab.Screen
                name="+Beneficios"
                component={ProfileScreen}
                options={{ headerShown: false }}

            />

        </Tab.Navigator>
    );
}



export default function Routes() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }} // Oculta o cabeçalho
            />

            <Stack.Screen
                name="PageMain"
                component={MainTabs}
                options={{ headerShown: false }}
            />




        </Stack.Navigator>

    )
}