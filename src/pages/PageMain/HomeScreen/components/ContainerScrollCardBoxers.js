import React, { useState } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'






const Container = styled.View`
    width: 350px;
    height: auto;
    background-color: #242424;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 0px;
    overflow: hidden;

`



function ContainerScrollCardBoxers(props) {


    return (
        <Container>
            {props.children}
        </Container>
    )
}



export default ContainerScrollCardBoxers

