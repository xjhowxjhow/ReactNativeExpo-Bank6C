import React, { useState } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'



const ScrollContainerCardsContainer = styled.ScrollView`
    height: 100%;
    width: 100%;

    `


const ContainerMainScroll = styled.View`
    width: auto;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 18px;

    `





function ScrollContainerCards(props) {
    
        return (
            <ScrollContainerCardsContainer horizontal={true} showsHorizontalScrollIndicator={false}>
                <ContainerMainScroll>
                    {props.children}
                </ContainerMainScroll>
            </ScrollContainerCardsContainer>
        )
    }



export default ScrollContainerCards