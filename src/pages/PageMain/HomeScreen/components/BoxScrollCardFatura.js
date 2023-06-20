import React, { useState } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'

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

`



const ContainerMid = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 15px;
` 

const ContainerBottom = styled.View`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    background-color: #303030;
    justify-content:center;
    align-items: center;
    gap:10px;

`




function BoxScrollCardFatura (props){

    return (
        <ContainerScrollCardBoxers>
            
            <ContainerTop></ContainerTop>
            <ContainerMid></ContainerMid>
            <ContainerBottom></ContainerBottom>

        </ContainerScrollCardBoxers>
    )
}




export default BoxScrollCardFatura