import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Button } from 'react-native'
import * as Animatable from 'react-native-animatable'




export default function Welcome() {

  const [popaberto, setPopaberto] = useState(false);


  const togglePopup = () => {
    setPopaberto(!popaberto);
  };

  const closearea = () => {
    if (popaberto) {
      setPopaberto(false);
      console.log('fechou');
      //animacao recolhendo o pop-up

    }
  };

  const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      position: 'relative',
    },
    container_enter: {
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '40%',
    },

    container_butoons: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 15,
      width: '90%',
      height: '40%',
      margin: 10,



    },

    button_primary: {
      flex: 1,
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffd41f',
      borderRadius: 13,

    },
    button: {
      flex: 1,
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
      borderRadius: 13,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2) ',

    },
    text_btn: {
      fontSize: 15,
      color: '#000',

    },

    text_btn2: {
      fontSize: 15,
      color: '#fffafa'
    }

  })

  const styles_pop = StyleSheet.create({

    container_enter_pop: {

      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '40%',
      backgroundColor: '#2f2b29',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,

    },
    container_butoons_pop: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      width: '90%',
      height: '90%',
      margin: 10,


    },
    icon_account: {

      width: 50,
      height: 50,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fffafa'
 
    },
    icon_account_txt: {
      fontSize: 12,
      color: '#2e2b2b'
    },

    container_user: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

    },
    container_user_wel: {

    },
    welc_text_user: {
      fontSize: 21,
      color: '#fffafa',

    }
    ,
    container_user_acc: {
      flex: 1,
      maxHeight: 30,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20,

    }
    ,
    text_user_acc: {
      fontSize: 15,
      color: '#fffafa',
      margin: 0,
    },
    button: {
      flex: 1,
      width: '90%',
      maxHeight: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
      borderRadius: 13,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2) ',

    }
    ,
    button_primary: {
      flex: 1,
      width: '90%',
      maxHeight: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffd41f',
      borderRadius: 13,

    }

  })

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/login_src/background.jpg')}
        style={styles.background}
        onTouchStart={() => closearea()}
      />

      <View style={styles.container_enter}>
        <Animatable.View style={styles.container_butoons} animation="fadeInUpBig">
          <TouchableOpacity style={styles.button_primary} onPress={() => alert('Simple Button pressed')}>
            <Text style={styles.text_btn}>Abrir Conta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => togglePopup()}>
            <Text style={styles.text_btn2}>Já tenho conta</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>



      {popaberto && (
        <Animatable.View
          style={styles_pop.container_enter_pop}
          animation="fadeInUpBig"
          duration={400}
        >
          <View style={styles_pop.container_butoons_pop}>

            <TouchableOpacity style={styles_pop.icon_account}>
              <Text style={styles_pop.icon_account_txt}>JS</Text>
            </TouchableOpacity>

            <View style={styles_pop.container_user}>

              <View style={styles_pop.container_user_wel}>
                <Text style={styles_pop.welc_text_user}>Olá, Jhoantan</Text>
              </View>

              <View style={styles_pop.container_user_acc}>
                <Text style={styles_pop.text_user_acc}>Agência 0001</Text>
                <Text style={styles_pop.text_user_acc}>Conta Corrente 000000</Text>
              </View>
            </View>


            <TouchableOpacity style={styles_pop.button}onPress={() => alert('Simple Button pressed')}>
              <Text style={styles.text_btn2}>Entrar Com outra Conta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles_pop.button_primary} onPress={() => togglePopup()}>
              <Text style={styles.text_btn}>Entrar</Text>
            </TouchableOpacity>

          </View>
        </Animatable.View>
      )}


    </View>
  );
}