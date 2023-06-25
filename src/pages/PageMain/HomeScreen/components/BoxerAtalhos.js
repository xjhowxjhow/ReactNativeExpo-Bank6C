import React, { useState } from 'react'
import styled from 'styled-components/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import ContainerBoxersTransp from './ContainerBoxersTransp'

const ContainerTop = styled.View`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 15px;
    padding-right: 10px;
    padding-left: 10px;


`
const ContainerBottom = styled.TouchableOpacity`
    width: 60px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap:5px;



`

const ButtonsLayoutTop = styled.View`
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: #303030;
    `






const TextContinaer = styled.Text`
    font-size: 12px;
    color: #ffffff;
    text-align: center
    ;

`

const TextContinaerBig = styled.Text`
    font-size: 15px;
    color: #ffffff;
    text-align: center;

`




function BoxerAtalhos() {



    return (
        <ContainerBoxersTransp>
            <ContainerTop>
                <ContainerBottom>
                    <ButtonsLayoutTop>
                        <MaterialCommunityIcons name="qrcode-scan" size={22} color="#d5d5d5" />
                    </ButtonsLayoutTop>
                    <TextContinaer>Ver Extrato</TextContinaer>
                </ContainerBottom>
                <ContainerBottom>
                    <ButtonsLayoutTop>
                        <MaterialCommunityIcons name="barcode-scan" size={20} color="#d5d5d5" />
                    </ButtonsLayoutTop>
                    <TextContinaer>Pagar</TextContinaer>
                </ContainerBottom>
                <ContainerBottom>
                    <ButtonsLayoutTop>
                        <Octicons name="arrow-switch" size={20} color="#d5d5d5" />
                    </ButtonsLayoutTop>
                    <TextContinaer>Transferir</TextContinaer>
                </ContainerBottom>
                <ContainerBottom>
                    <ButtonsLayoutTop>
                        <MaterialCommunityIcons name="security" size={22} color="#d5d5d5" />
                    </ButtonsLayoutTop>
                    <TextContinaer>Segurança</TextContinaer>
                </ContainerBottom>
                <ContainerBottom>
                    <ButtonsLayoutTop>
                    <TextContinaerBig>•••</TextContinaerBig>
                    </ButtonsLayoutTop>
                    <TextContinaer>Todos</TextContinaer>
                </ContainerBottom>
            </ContainerTop>
        </ContainerBoxersTransp>

    )
}



export default BoxerAtalhos



//  {/* <Text style={BoxIntem.txt_int_cc_bottom}>{viewMoney ? 'R$ 217.785,45' : 'R$ ********'} </Text> */}