import {createNativeStackNavigator} from '@react-navigation/native-stack'

//importar as telas
import Welcome from '../pages/Welcome'
import PageMain from '../pages/PageMain'

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
                name="PageMain" 
                component={PageMain}
                options={{headerShown:false}} // Oculta o cabeçalho
                />

        </Stack.Navigator>

    )
}