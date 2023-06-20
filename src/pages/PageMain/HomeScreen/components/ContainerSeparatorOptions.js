import React, { useState } from 'react'
import styled from 'styled-components/native'




const Container = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    `

const TextContinaerBig = styled.Text`
    font-size: 18px;
    color: #ffffff;
    font-weight: bold;
    padding-left: 0px;
    `


const ButtonOption = styled.TouchableOpacity`

    font-size: 18px;
    color: #ffffff;
    font-weight: bold;
    padding-left: 0px;

`

const TextBtn = styled.Text`
    font-size: 15px;
    color: #22a0dd;
    font-weight: bold;

`




function ContainerSeparatorOptions({ title, btn_text }) {

    return (
        <Container>
            <TextContinaerBig>{title}</TextContinaerBig>
            <ButtonOption>
                <TextBtn> {btn_text} </TextBtn>
            </ButtonOption>
        </Container>
    )

}



export default ContainerSeparatorOptions