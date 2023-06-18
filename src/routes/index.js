import {createNativeStackNavigator} from '@react-navigation/native-stack'

//importar as telas
import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'

const Stack = createNativeStackNavigator() // Cria a pilha de navegação



export default function Routes(){

    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Welcome" 
                component={Welcome} 
                options={{headerShown:false}} // Oculta o cabeçalho
                />

            <Stack.Screen 
                name="SignIn" 
                component={SignIn}
                options={{headerShown:false}} // Oculta o cabeçalho
                />

        </Stack.Navigator>

    )
}