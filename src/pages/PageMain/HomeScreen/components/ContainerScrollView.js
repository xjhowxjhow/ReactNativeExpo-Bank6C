import React, { useState } from 'react'
import styled from 'styled-components/native'





const Container = styled.ScrollView`

    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

`

const ContainerInside = styled.View`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 20px;
    gap: 20px;
    `



function ContainerScrollView(props) {

    return (

        <Container nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
            <ContainerInside>
                {props.children}
            </ContainerInside>
        </Container>

    )

}


export default ContainerScrollView