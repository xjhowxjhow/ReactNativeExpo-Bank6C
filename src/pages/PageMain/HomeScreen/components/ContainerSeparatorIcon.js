import React, { useState } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'



const Container = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    `

const TextContinaerBig = styled.Text`
    font-size: 18px;
    color: #ffffff;
    font-weight: bold;
    padding-left: 0px;
    `





function ContainerSeparatorIcon({ title, btn_text }) {

    return (
        <Container>
            <Image source={require('../../../../assets/page_main/pix_icon.png')} 
            style={{ width: 18, height: 18, resizeMode: 'contain' }}
            />
            <TextContinaerBig>{title}</TextContinaerBig>
        </Container>
    )

}



export default ContainerSeparatorIcon