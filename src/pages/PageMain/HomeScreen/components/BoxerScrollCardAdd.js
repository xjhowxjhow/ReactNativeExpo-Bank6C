import React, { useState } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'




const ContainerTop = styled.View`

    width: 120px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding-top: 15px;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    background-color: #222222;
    border-radius: 15px;

`




const BTnContainerFrameCard = styled.TouchableOpacity`
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `


const TexrContinerBold = styled.Text`
    font-size: 15px;
    color: #2288bd;
    font-weight: bold;
    text-align: center;
`


function BoxScrollCardAdd() {


    return (

        <ContainerTop>
            <BTnContainerFrameCard>
                <Ionicons name="add-circle-outline" size={30} color="#2288bd" />
                <TexrContinerBold>Pedir cartão Adicional</TexrContinerBold>
            </BTnContainerFrameCard>
        </ContainerTop>

    )
}



export default BoxScrollCardAdd