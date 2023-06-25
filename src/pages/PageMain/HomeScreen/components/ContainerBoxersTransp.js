import React, { useState } from 'react'
import styled from 'styled-components/native'



const Container = styled.View`

    width: 100%;
    height: auto;
    background-color: transparent;  
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 0px;
    overflow: hidden;

`



function ContainerBoxersTransp(props) {


    return (
        <Container>
            {props.children}
        </Container>
    )
}


export default ContainerBoxersTransp