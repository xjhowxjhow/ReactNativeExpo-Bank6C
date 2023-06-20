import React, { useState } from 'react'
import styled from 'styled-components/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'




const Container = styled.View`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            width: 100%;
            height: 60px;
            `


const ContainerInsideTopLeft = styled.View`
    width: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;`

const TextUserWelcome = styled.Text`
    font-size: 15px;
    color: #ffffff;

`

const ContainerInsideTopRight = styled.View`
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 10px;
    `


const IconBtnaccoountAbout = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 255);

    `

const IconAcctounDefault = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;

    `

function ContainerHeader() {

    return (

        <Container>
            <ContainerInsideTopLeft>
                <TextUserWelcome>Boa Noite, Jhow</TextUserWelcome>
            </ContainerInsideTopLeft>

            <ContainerInsideTopRight>

                <IconBtnaccoountAbout>
                    <MaterialCommunityIcons name='help' size={16} color={'#ffffff'} />
                </IconBtnaccoountAbout>

                <IconAcctounDefault>
                    <Ionicons name='chatbox-outline' size={20} color={'#ffffff'} />
                </IconAcctounDefault>

                <IconAcctounDefault>
                    {/* {viewMoney ? <Ionicons name='eye-outline' size={20} color={'#ffffff'} /> : <Ionicons name='eye-off-outline' size={20} color={'#ffffff'} />} */}
                    <Ionicons name='eye-outline' size={20} color={'#ffffff'} />
                </IconAcctounDefault>

                <IconAcctounDefault>
                    <FontAwesome name='user-o' size={20} color={'#ffffff'} />
                </IconAcctounDefault>

            </ContainerInsideTopRight>
        </Container>

    )

}


export default ContainerHeader