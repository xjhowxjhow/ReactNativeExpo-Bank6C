import React, { useState } from 'react'
import styled from 'styled-components/native'



const Container = styled.View`
            display: flex;
            flex-direction: column;
            gap: 10px;
            `







function ContainerSection (props){

    return(
        <Container>
            {props.children}
        </Container>
    );
}

export default ContainerSection;