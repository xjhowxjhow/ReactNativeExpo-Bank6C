import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'

const ScrollContainerCardsContainer = styled.ScrollView`
    flex: 1;
`

const ContainerMainScroll = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    gap: 15px;
`

function ScrollContainerCards(props) {
    return (
        <ScrollContainerCardsContainer horizontal={true} showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
            <ContainerMainScroll>
                {props.children}
            </ContainerMainScroll>
        </ScrollContainerCardsContainer>
    )
}

export default ScrollContainerCards
