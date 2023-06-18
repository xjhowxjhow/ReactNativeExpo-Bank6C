import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//importar as telas
import Welcome from '../pages/Welcome'


const Stack = createNativeStackNavigator() // Cria a pilha de navegação

import HomeScreen from '../pages/PageMain/HomeScreen'
import ProfileScreen from '../pages/PageMain/ProfileScreen';

const Tab = createBottomTabNavigator();

function MainTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
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