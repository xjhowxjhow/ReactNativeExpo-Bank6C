import React, { useState } from 'react'
import styled from 'styled-components/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import ContainerBoxers from './ContainerBoxers'

const ContainerTop = styled.View`
    width: 90%;
    margin: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-top: 15px;
    padding-right: 10px;
    padding-left: 10px;

    

`
const ContainerBottom = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap:5px;
    background-color: #303030;
    border-radius: 15px;



`

const ButtonsLayoutTop = styled.View`
    width: 50%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    border-radius: 15px;
    padding-right: 20px;


    `



const TextContinaerGroup = styled.View`
    width: 50%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px;
    padding-left: 20px;

    `



const TextContinaer = styled.Text`
    font-size: 13px;
    color: #ffffff;
    text-align: center
    ;

`
const TextDualOptions = styled.Text`
    font-size: 15px;
    color: #ffffff;
    text-align: center;


`


// Cotente Dual Options

const DualContainerOptions = styled.View`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    background-color: #303030;
    justify-content: center;
    align-items: center;
    gap:10px;

`

const ButtonOption = styled.TouchableOpacity`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;


`


function SecaoDragDropComponent() {

    // test array data

    const [data, setData] = useState([
        { id: 1, name: 'Saldos' },
        { id: 2, name: 'C6 Invest' },
        { id: 3, name: 'Meus Cartões' },
        { id: 4, name: 'Pix' },
        { id: 5, name: 'Meus Atalhos' },
        { id: 6, name: 'Para Voçe' },

    ])




    return (
        <ContainerBoxers>
            <ContainerTop>

                {data.map((item) => (
                    <ContainerBottom key={item.id}>
                        <TextContinaerGroup>
                            <TextContinaer>{item.name}</TextContinaer>
                        </TextContinaerGroup>
                        <ButtonsLayoutTop>
                            <Octicons name="arrow-switch" size={20} color="#d5d5d5" />
                        </ButtonsLayoutTop>
                    </ContainerBottom>
                ))}
            </ContainerTop>


            <DualContainerOptions>
                <ButtonOption>
                    {/* <TextDualOptions>Meus limites Pix</TextDualOptions> */}
                </ButtonOption>
            </DualContainerOptions>

        </ContainerBoxers>

    )
}



export default SecaoDragDropComponent



//  {/* <Text style={BoxIntem.txt_int_cc_bottom}>{viewMoney ? 'R$ 217.785,45' : 'R$ ********'} </Text> */}