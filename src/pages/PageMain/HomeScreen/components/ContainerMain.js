import React, { useState } from 'react'
import styled from 'styled-components/native'




const Container = styled.View`
    flex: 1;
    background-color: #121212;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    
    `





function ContainerMain(props) {

    return (

        <Container>
            {props.children}
        </Container>

    )

}


export default ContainerMain