import React, { useState } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'
import ContainerScrollCardBoxers from './ContainerScrollCardBoxers'



const Container = styled.View`
    width: 340px;
    height: 200px;


`
const ImageContainer = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background-color: #222222;
    opacity: 0.8;
    overflow: hidden;

`
const BtnAcess = styled.TouchableOpacity`
    width: 100px;
    height: 20px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffd41c;
    opacity: 0.8;
    bottom: 15px;
    right:10px;
    border-radius: 10px;

`

const TextBtnAcess = styled.Text`
    font-size: 12px;
    color: #151515;
    font-weight: bold;
    
`

function BoxerAds({ bacground_img, text_top, text_bottom }) {

    return (
        <Container>
            <ImageContainer>
                <Image source={bacground_img} style={{ width: '100%', height: '100%'}} resizeMode="contain" />
            </ImageContainer>
            <BtnAcess>
                <TextBtnAcess>Conferir</TextBtnAcess>
            </BtnAcess>
        </Container>

    )

}


export default BoxerAds