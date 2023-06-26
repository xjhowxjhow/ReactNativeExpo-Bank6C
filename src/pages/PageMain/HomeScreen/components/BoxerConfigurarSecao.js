import React, { useState } from 'react'
import styled from 'styled-components/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ContainerBoxers from './ContainerBoxers'

const Container = styled.TouchableOpacity`
    width: 100%;
    height: 65px;
    background-color: #303030;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap : 10px;

`



const TextContinaer = styled.Text`
    font-size: 15px;
    color: #22a0dd;
    font-weight: bold;
`




function BoxerConfigurarSecao({configSection}) {



    return (
        <ContainerBoxers>

            <Container onPress={() => configSection()}>
                <AntDesign name="setting" size={20} color="#22a0dd" />
                <TextContinaer>Configurar seção</TextContinaer>
            </Container>

        </ContainerBoxers>

    )
}



export default BoxerConfigurarSecao