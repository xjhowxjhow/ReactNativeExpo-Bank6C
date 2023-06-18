import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Button, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function HomeScreen() {

    const Container = StyleSheet.create({
        container: {
            backgroundColor: '#2f2b29',
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
        testeScroll: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
            height: 1000
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
                        <MaterialCommunityIcons name='help' size={16} color={'#ffffff'}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={Container_Top.icon_account}>
                        <Ionicons name='chatbox-outline'  size={20} color={'#ffffff'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={Container_Top.icon_account}>
                        <Ionicons name='eye-off-outline'  size={20} color={'#ffffff'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={Container_Top.icon_account}>
                        <FontAwesome name='user-o'  size={20} color={'#ffffff'} />
                    </TouchableOpacity>

                </View>

            </View>

            <ScrollView style={Style_ScrollArea.scroll_area}>

                <Text style={Style_ScrollArea.testeScroll}>HomeScreen pagge</Text>

            </ScrollView>

        </View>
    )
}