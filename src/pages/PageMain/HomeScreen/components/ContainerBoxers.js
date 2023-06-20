import React, { useState } from 'react'
import styled from 'styled-components/native'



const Container = styled.View`

    width: 100%;
    height: auto;
    background-color: #242424;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 0px;
    overflow: hidden;

`



function ContainerBoxers(props) {


    return (
        <Container>
            {props.children}
        </Container>
    )
}


export default ContainerBoxers