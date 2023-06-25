import React, { useState } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
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
    padding-bottom: 10px;

`




const ContainerBottom = styled.View`
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: row;
    background-color: #303030;
    justify-content:space-between;
    align-items: center;
    gap:10px;


`
const ContainerFrameCard = styled.View`
    width: 20%;
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    `

const ContinerLeftCardsText = styled.View`
    width: 80%;
    height:100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 5px;
    `

const TextContinaer = styled.Text`
    font-size: 15px;
    color: #ffffff;

`

const TexrContinerBold = styled.Text`
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;

`

const TexrContinerBoldblue = styled.Text`
    font-size: 16px;
    color: #2089be;
    font-weight: bold;


`


const ContainerSeparatorText = styled.View`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

`

const ContainerBlockCard = styled.View`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const BtnDetails = styled.TouchableOpacity`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: #303030;
    border-radius: 5px;
    padding-right: 25px;

`
    

function BoxScrollCards({ viewMoney }) {

    return (
        <ContainerScrollCardBoxers>

            <ContainerTop>

                <ContainerFrameCard>
                    <Image source={require('../../../../assets/page_main/cards_mini.png')}
                        style={{ borderRadius: 5 }}
                    />
                </ContainerFrameCard>


                <ContinerLeftCardsText>
                    <ContainerSeparatorText>
                        <TextContinaer>Cartão</TextContinaer>
                        <TexrContinerBold>Final 1626</TexrContinerBold>
                    </ContainerSeparatorText>
                    <ContainerSeparatorText>
                        <TextContinaer>Nome Gravado</TextContinaer>
                        <TexrContinerBold>XJHOWXJHOW MALEN</TexrContinerBold>
                    </ContainerSeparatorText>

                </ContinerLeftCardsText>

            </ContainerTop>



            <ContainerBottom>

                <ContainerBlockCard>
                    {/* <MaterialIcons name="lock-outline" size={20} color="#ffffff" /> */}
                    <MaterialIcons name="lock-open" size={20} color="#4add72" />
                    <TextContinaer>Desbloqueado</TextContinaer>
                </ContainerBlockCard>

                <BtnDetails>
                    <TexrContinerBoldblue>Detalhes</TexrContinerBoldblue>
                </BtnDetails>

            </ContainerBottom>

        </ContainerScrollCardBoxers>
    )
}




export default BoxScrollCards