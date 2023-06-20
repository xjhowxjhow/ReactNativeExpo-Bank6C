import React, { useState } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'
import ContainerScrollCardBoxers from './ContainerScrollCardBoxers'





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

const ContainerBottom = styled.View`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    background-color: #303030;
    justify-content:center;
    align-items: center;
    gap:10px;

`
// content ContainerTop

const ContainerStatsFatura = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

const ContainerGroupTxt = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    padding-right: 10px;

`

const TextBold = styled.Text`

    font-size: 15px;
    color: #ffffff;
    font-weight: bold;

`

const TextNormal = styled.Text`
    font-size: 15px;
    color: #ffffff;
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


function BoxScrollCardFatura({viewMoney}) {

    return (
        <ContainerScrollCardBoxers>

            <ContainerTop>
                <ContainerStatsFatura>
                    <ContainerGroupTxt>
                        <Feather name='loader' size={16} color={'#a2661d'} />
                        <TextBold>ABERTA</TextBold>
                    </ContainerGroupTxt>
                    <ContainerGroupTxt>
                        <TextNormal>Vence em </TextNormal>
                        <TextBold>10/07</TextBold>
                    </ContainerGroupTxt>
                </ContainerStatsFatura>
            </ContainerTop>



            <ContainerMid>
                <TextNormal>R$</TextNormal>
                <TextBold>{viewMoney ? '878,80': '---'}</TextBold>
            </ContainerMid>

            <ContainerBottom>

                <ButtonOption>
                    <TextNormal>Baixar Fatura</TextNormal>
                </ButtonOption>
                <LineSeparator />

                <ButtonOption>
                    <TextNormal>Acessar fatura</TextNormal>
                </ButtonOption>

            </ContainerBottom>

        </ContainerScrollCardBoxers>
    )
}




export default BoxScrollCardFatura