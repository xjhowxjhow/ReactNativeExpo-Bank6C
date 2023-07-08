import React, { useState } from 'react'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'




const Container = styled.View`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            width: 100%;
            height: auto;
            padding-bottom: 10px;
            `


const BtnInsideTopLeft = styled.TouchableOpacity`
    width: 20%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


    `

const TextUserWelcome = styled.Text`
    font-size: 20px;
    color: #ffffff;
    font-weight: bold;

`

const ContainerInsideTopRight = styled.View`
    width: 80%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    `


function SecaoHeader({ configSection }) {

    return (

        <Container>
            <BtnInsideTopLeft onPress={() => configSection()}>
                <Ionicons name="arrow-back" size={28} color="#ffffff" />
            </BtnInsideTopLeft>
            <ContainerInsideTopRight>
                <TextUserWelcome>Personalizar tela inicial</TextUserWelcome>
            </ContainerInsideTopRight>
            
        </Container>

    )

}


export default SecaoHeader