import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Button, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'

// components

import ContainerMain from './components/ContainerMain'
import ContainerHeader from './components/ContainerHeader'
import ContainerScrollView from './components/ContainerScrollView'
import ContainerSeparatorSection from './components/ContainerSeparatorSection'
import BoxerAccount from './components/BoxerAccount'
import BoxerInvest from './components/BoxerInvest'
import ContainerSeparatorOptions from './components/ContainerSeparatorOptions'


export default function HomeScreen() {

    // state view money eye
    const [viewMoney, setViewMoney] = useState(true)

    const setViewMoneyClick = () => {
        setViewMoney(!viewMoney)
    }

    const Container = StyleSheet.create({
        container: {
            backgroundColor: '#121212', // itens 2f2b29
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
        },
    })

    const Container_Top = StyleSheet.create({

        container_top: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
            height: 60,

        },
        conainters_inside_top_l: {

            width: '20%',

            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: 10

        },
        conainters_inside_top_r: {
            width: '50%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: 10,
            gap: 10

        },

        icon_account: {

            width: 25,
            height: 25,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',


        },
        icon_account_about: {

            width: 20,
            height: 20,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 255) ',

        },
        icon_account_txt: {
            fontSize: 12,
            color: '#2e2b2b'
        },
        txt_user_wel: {
            fontSize: 14,
            color: '#ffffff',
        }

    })

    const Style_ScrollArea = StyleSheet.create({


        scroll_area: {

            width: '100%',
            height: '100%',
            //backgroundColor: '#282a36', 
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',

        },
        container_main_scroll: {
            width: '100%',
            height: '100%',
            //backgroundColor: '#282a36', 
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 30,
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 20,
            gap: 20,
        },

    })


    const Container_Boxers = StyleSheet.create({
        container: {
            width: '100%',
            height: 'auto',
            backgroundColor: '#242424',
            borderRadius: 15,
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
            overflow: 'hidden',
        },
    })

    const BoxIntem = StyleSheet.create({
        container_cc_top: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 10,
            paddingTop: 15,
            paddingRight: 10,
            paddingLeft: 15,

        },
        container_cc_mid: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 10,
            padding: 15,
        },

        container_cc_bottom: {
            width: '100%',
            height: 50,
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#303030',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
            padding: 15

        },

        txt_int_cc_bottom: {
            fontSize: 15,
            color: '#ffffff',
        },

        txt_int_cc_bottom_greb: {
            fontSize: 15,
            color: '#ffffff',
            fontWeight: 'bold',
            backgroundColor: 'rgba(98, 202, 84, 0.2)',
            borderRadius: 5,
            padding: 5,
        },



    })


    const SeparadorText = StyleSheet.create({
        txt: {
            fontSize: 18,
            color: '#ffffff',
            fontWeight: 'bold',
            paddingLeft: 0,
        }
    })

    const SepararoGroupOptons = StyleSheet.create({

        container: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        txt_btn: {
            fontSize: 15,
            color: '#22a0dd',
            fontWeight: 'bold',
        },
    })

    const BoxIntem_Inv = StyleSheet.create({  //conta corrente

        container_cc_mid: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 10,
            padding: 15,
        },

        container_cc_bottom: {
            width: '100%',
            height: 50,
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#303030',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,


        },
        dual_optn: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            height: '100%',
            backgroundColor: 'rba(255,255,255,0.5)',
            //borderRightColor: 'rgba(255, 255, 255, 255) ',

        }
    })


    const ScrollCards = StyleSheet.create({
        // algumas propriedades estao como AUTO 
        container: {
            height: 'auto',
            width: '100%',
            //backgroundColor: 'rgba(255, 255, 255, 0.2) ',


        },
        container_main_scroll: {
            width: 'auto',
            height: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            //backgroundColor: 'rgba(255, 255, 255, 0.3) ',
            gap: 10,

        },
        teste_1: {
            height: 150,
            width: 300,
            backgroundColor: '#38b3dd'
        },

        Container_Boxers: {

            width: 350,
            height: 'auto',
            backgroundColor: '#242424',
            borderRadius: 15,
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
            overflow: 'hidden',
        },

        Container_Sts_Card_Fatura: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

        },

        txt_cc_bottom_bold: {
            fontSize: 15,
            color: '#ffffff',
            fontWeight: 'bold',
        }
        ,
        Container_Group_Txt: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            paddingRight: 10,

        },
        container_cc_mid: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 10,
            padding: 25
        },

    })



    return (
        <ContainerMain>
            <ContainerHeader />

            <ContainerScrollView>
                <BoxerAccount />
                <ContainerSeparatorSection title={'C6 Invest'} />
                <BoxerInvest />
                <ContainerSeparatorOptions title={'Meus Cartoes'} btn_text={'Cartão Virtual'} />
                {/* End SyledComponents Continue.. */}


                {/* Box 3 */}

                <ScrollView style={ScrollCards.container} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={ScrollCards.container_main_scroll}>
                        {/* teste boxers */}


                        {/* Box Card 1 */}
                        <View style={ScrollCards.Container_Boxers}>
                            <View style={BoxIntem.container_cc_top}>
                                <View style={ScrollCards.Container_Sts_Card_Fatura}>
                                    <View style={ScrollCards.Container_Group_Txt}>
                                        <Feather name='loader' size={16} color={'#a2661d'} />
                                        <Text style={ScrollCards.txt_cc_bottom_bold}>ABERTA</Text>
                                    </View>
                                    <View style={ScrollCards.Container_Group_Txt}>
                                        <Text style={BoxIntem.txt_int_cc_bottom}>Vence em </Text>
                                        <Text style={ScrollCards.txt_cc_bottom_bold}>10/07</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={ScrollCards.container_cc_mid}>
                                <Text style={BoxIntem.txt_int_cc_bottom}>R$</Text>
                                <Text style={BoxIntem.txt_int_cc_bottom}>{viewMoney ? '1.785,45' : '********'}</Text>
                            </View>

                            <View style={BoxIntem_Inv.container_cc_bottom}>

                                <TouchableOpacity style={BoxIntem_Inv.dual_optn}>
                                    <Text style={BoxIntem.txt_int_cc_bottom}>Baixar Fatura</Text>
                                </TouchableOpacity>

                                <View style={{ width: 1, height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></View>

                                <TouchableOpacity style={BoxIntem_Inv.dual_optn}>
                                    <Text style={BoxIntem.txt_int_cc_bottom}>Acessar fatura</Text>
                                </TouchableOpacity>
                            </View  >
                        </View>

                        {/* Box Card 2 */}
                        <View style={ScrollCards.Container_Boxers}>

                        </View>
                    </View>


                </ScrollView>

                {/* End Box 3 */}


                <View style={Container_Boxers.container}>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                </View>

                <View style={Container_Boxers.container}>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                </View>

                <View style={Container_Boxers.container}>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                </View>


            </ContainerScrollView>

        </ContainerMain>
    )
}