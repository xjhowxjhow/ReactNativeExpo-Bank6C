import React, { useState } from 'react'
import styled from 'styled-components/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import ContainerBoxers from './ContainerBoxers'

const ContainerTop = styled.View`
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding-top: 15px;
    padding-right: 10px;
    padding-left: 10px;


`
const ContainerBottom = styled.View`
    width: 60px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap:5px;



`

const ButtonsLayoutTop = styled.TouchableOpacity`
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
    font-size: 13px;
    color: #ffffff;
    text-align: center
    ;

`
const TextDualOptions = styled.Text`
    font-size: 15px;
    color: #ffffff;
    text-align: center;


`


// Cotente Dual Options

const DualContainerOptions = styled.View`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    background-color: #303030;
    justify-content: center;
    align-items: center;
    gap:10px;

`

const ButtonOption = styled.TouchableOpacity`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;


`
const LineSeparator = styled.View`
    width: 1px;
    height: 100%;
    background-color: rgba(255,255,255,0.1) ;
`

function BoxerPix() {



    return (
        <ContainerBoxers>
            <ContainerTop>
                <ContainerBottom>
                    <ButtonsLayoutTop>
                        <MaterialCommunityIcons name="qrcode-scan" size={22} color="#d5d5d5" />
                    </ButtonsLayoutTop>
                    <TextContinaer>Pagar QR Code</TextContinaer>
                </ContainerBottom>
                <ContainerBottom>
                    <ButtonsLayoutTop>
                        <Octicons name="arrow-switch" size={20} color="#d5d5d5" />
                    </ButtonsLayoutTop>
                    <TextContinaer>Transferir</TextContinaer>
                </ContainerBottom>
                <ContainerBottom>
                    <ButtonsLayoutTop>
                        <MaterialIcons name="attach-money" size={22} color="#d5d5d5" />
                    </ButtonsLayoutTop>
                    <TextContinaer>Receber</TextContinaer>
                </ContainerBottom>
                <ContainerBottom>
                    <ButtonsLayoutTop>
                        <MaterialCommunityIcons name="inbox-arrow-down" size={22} color="#d5d5d5" />
                    </ButtonsLayoutTop>
                    <TextContinaer>Saque e Troco</TextContinaer>
                </ContainerBottom>

            </ContainerTop>

            <DualContainerOptions>
                <ButtonOption>
                    <TextDualOptions>Minhas chaves</TextDualOptions>
                </ButtonOption>
                <LineSeparator />
                <ButtonOption>
                    <TextDualOptions>Meus limites Pix</TextDualOptions>
                </ButtonOption>
            </DualContainerOptions>

        </ContainerBoxers>

    )
}



export default BoxerPix



//  {/* <Text style={BoxIntem.txt_int_cc_bottom}>{viewMoney ? 'R$ 217.785,45' : 'R$ ********'} </Text> */}