import React, { useState } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import Entypo from 'react-native-vector-icons/Entypo'

import ContainerBoxers from './ContainerBoxers'

const ContainerTop = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding-top: 15px;
    padding-right: 10px;
    padding-left: 10px;

`

const ContainerMid = styled.View`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 15px;
`


const ContainerBottomBTN = styled.TouchableOpacity`

    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    background-color: #303030;
    justify-content: space-between;
    align-items: center;
    gap:10px;
    padding:15px;


`



const TextContinaer = styled.Text`
    font-size: 15px;
    color: #ffffff;

`




function BoxerAccount(props) {



    return (
        <ContainerBoxers>

            <ContainerTop>
                <Image source={require('../../../../assets/page_main/brasil.png')} style={{ width: 12, height: 12, borderRadius: 50 }} />
                <TextContinaer>Saldo em Conta Corrente</TextContinaer>
            </ContainerTop>

            <ContainerMid>
                <TextContinaer>R$</TextContinaer>
                {/* <Text style={BoxIntem.txt_int_cc_bottom}> {viewMoney ? '1.578,87' : '********'}</Text> */}
                <TextContinaer>********</TextContinaer>
            </ContainerMid>

            <ContainerBottomBTN>
                <TextContinaer>Exibir extrato</TextContinaer>
                <TextContinaer>
                    <Entypo name='chevron-small-right' size={20} color={'#ffffff'} />
                </TextContinaer>
            </ContainerBottomBTN>

        </ContainerBoxers>

    )
}



export default BoxerAccount