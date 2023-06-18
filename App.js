import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer} from '@react-navigation/native'; // Importa o container de navegação
import Routes from './src/routes'; // Importa as rotas das páginas


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#1c1515" />
        <Routes />
      </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:"#F5FCFF"
//   },
// });
