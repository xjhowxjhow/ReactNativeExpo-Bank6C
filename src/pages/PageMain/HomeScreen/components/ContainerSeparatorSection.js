import React, { useState } from 'react'
import styled from 'styled-components/native'



const TextContinaer = styled.Text`
    font-size: 18px;
    color: #ffffff;
    font-weight: bold;
    padding-left: 10px;
    `




function ContainerSeparatorSection({ title }) {

    return (
        <TextContinaer> 
            {title}
        </TextContinaer>
    )

}



export default ContainerSeparatorSection