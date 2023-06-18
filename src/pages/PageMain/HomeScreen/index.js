import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Button, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'


export default function HomeScreen() {

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
            justifyContent:'center',
            alignItems:'center',
            width: '50%',
            height: '100%',
            backgroundColor:'rba(255,255,255,0.5)',
            //borderRightColor: 'rgba(255, 255, 255, 255) ',

        }
    })



    return (
        <View style={Container.container}>

            <View style={Container_Top.container_top}>

                <View style={Container_Top.conainters_inside_top_l}>
                    <Text style={Container_Top.txt_user_wel}>Boa Noite, Jhow</Text>
                </View>

                <View style={Container_Top.conainters_inside_top_r}>

                    <TouchableOpacity style={Container_Top.icon_account_about}>
                        <MaterialCommunityIcons name='help' size={16} color={'#ffffff'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={Container_Top.icon_account}>
                        <Ionicons name='chatbox-outline' size={20} color={'#ffffff'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={Container_Top.icon_account}>
                        <Ionicons name='eye-off-outline' size={20} color={'#ffffff'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={Container_Top.icon_account}>
                        <FontAwesome name='user-o' size={20} color={'#ffffff'} />
                    </TouchableOpacity>

                </View>

            </View>

            <ScrollView style={Style_ScrollArea.scroll_area}>

                <View style={Style_ScrollArea.container_main_scroll}>



                    {/* Box 1 */}
                    <View style={Container_Boxers.container}>
                        <View style={BoxIntem.container_cc_top}>
                            <Image source={require('../../../assets/page_main/brasil.png')} style={{ width: 12, height: 12 }} />
                            <Text style={BoxIntem.txt_int_cc_bottom}>Saldo em Conta Corrente</Text>
                        </View>
                        <View style={BoxIntem.container_cc_mid}>
                            <Text style={BoxIntem.txt_int_cc_bottom}>R$</Text>
                            <Text style={BoxIntem.txt_int_cc_bottom}>.......</Text>
                        </View>
                        <TouchableOpacity style={BoxIntem.container_cc_bottom}>
                            <Text style={BoxIntem.txt_int_cc_bottom}>Exibir extrato</Text>
                            <Text style={BoxIntem.txt_int_cc_bottom}>
                                <Entypo name='chevron-small-right' size={20} color={'#ffffff'} />
                            </Text>
                        </TouchableOpacity  >
                    </View>
                    {/* End Box 1 */}

                    {/* Separador Text */}

                    <Text style={SeparadorText.txt}>C6 Invest</Text>

                    {/* Separador Text */}

                    {/* Box 2 */}

                    <View style={Container_Boxers.container}>

                        <View style={BoxIntem.container_cc_top}>
                            <Image source={require('../../../assets/page_main/brasil.png')} style={{ width: 12, height: 12 }} />
                            <Text style={BoxIntem.txt_int_cc_bottom}>Brasil</Text>
                        </View>

                        <View style={BoxIntem_Inv.container_cc_mid}>
                            <Text style={BoxIntem.txt_int_cc_bottom}>Total Bruto</Text>
                            <Text style={BoxIntem.txt_int_cc_bottom}>R$ 217.785,45</Text>
                            <Text style={BoxIntem.txt_int_cc_bottom_greb}>R$ 875,90</Text>
                        </View>


                        <View style={BoxIntem_Inv.container_cc_bottom}>

                            <TouchableOpacity style={BoxIntem_Inv.dual_optn}>
                                <Text style={BoxIntem.txt_int_cc_bottom}>Ver detalhes</Text>
                            </TouchableOpacity>

                            <View style={{ width: 1, height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></View>
                            
                            <TouchableOpacity style={BoxIntem_Inv.dual_optn}>
                                <Text style={BoxIntem.txt_int_cc_bottom}>Investir</Text>
                            </TouchableOpacity>
                        </View  >

                    </View>

                    {/* End Box 2 */}

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

                </View>

            </ScrollView>

        </View>
    )
}