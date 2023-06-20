import React, { useState } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'


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



const TextContinaer = styled.Text`
    font-size: 15px;
    color: #ffffff;

`

const TextContainerInvestGreen = styled.Text`
    font-size: 15px;
    color: #ffffff;
    font-weight: bold;
    background-color: rgba(98, 202, 84, 0.2);
    padding: 5px;
    border-radius: 5px;

`

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

function BoxerInvest(props) {



    return (
        <ContainerBoxers>
            <ContainerTop>
                <Image source={require('../../../../assets/page_main/brasil.png')} style={{ width: 12, height: 12, borderRadius: 50 }} />
                <TextContinaer>Brasil</TextContinaer>
            </ContainerTop>

            <ContainerMid>
                <TextContinaer>Total Bruto</TextContinaer>
                <TextContinaer>R$ ********</TextContinaer>
                <TextContainerInvestGreen>R$ *****</TextContainerInvestGreen>
            </ContainerMid>

            <DualContainerOptions>
                <ButtonOption>
                    <TextContinaer>Ver detalhes</TextContinaer>
                </ButtonOption>

                <LineSeparator />

                <ButtonOption>
                    <TextContinaer>Investir</TextContinaer>
                </ButtonOption>
            </DualContainerOptions>

        </ContainerBoxers>

    )
}



export default BoxerInvest



//  {/* <Text style={BoxIntem.txt_int_cc_bottom}>{viewMoney ? 'R$ 217.785,45' : 'R$ ********'} </Text> */}