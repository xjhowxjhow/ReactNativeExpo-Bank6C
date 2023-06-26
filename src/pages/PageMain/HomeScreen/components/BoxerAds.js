import React, { useState } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'
import ContainerScrollCardBoxers from './ContainerScrollCardBoxers'



const Container = styled.View`
    width: 380px;
    height: 220px;


`
const ImageContainer = styled.View`
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


function BoxerAds({ bacground_img, text_top, text_bottom }) {

    return (
        <Container>
            <ImageContainer>
                <Image source={bacground_img} style={{ width: '100%', height: '100%'}} resizeMode="contain" />
            </ImageContainer>

        </Container>

    )

}


export default BoxerAds