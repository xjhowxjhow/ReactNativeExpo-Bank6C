import React, { useState } from 'react'
import styled from 'styled-components/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ContainerBoxers from './ContainerBoxers'

//  
import {GestureHandlerRootView} from 'react-native-gesture-handler'



import DraggableFlatList,{
    ScaleDecorator,
    ShadowDecorator,
    OpacityDecorator,
    useOnCellActiveAnimation,
} from  'react-native-draggable-flatlist'


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
    width: 90%;

    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap:5px;
    background-color: #303030;
    border-radius: 10px;
    margin: 10px 10px 15px 20px;


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


function SecaoDragDropComponent({ order,data_set }) {

    const ref = React.useRef(null);


    // test array data

    const [data, setData] = useState(data_set)

    const onDragEnd = ({ data: newData }) => {
        order(newData);
        setData(newData);

      };

    const renderItem =({item,drag}) =>{
        return(
            <ScaleDecorator>
                <OpacityDecorator activeOpacity={0.5}>
                    <ShadowDecorator>
                        <ContainerBottom onLongPress={drag}>
                            <TextContinaerGroup>
                                <TextContinaer>{item.name}</TextContinaer>
                            </TextContinaerGroup>
                            <ButtonsLayoutTop>
                                <MaterialCommunityIcons name="drag" size={20} color="#d5d5d5" />
                            </ButtonsLayoutTop>
                        </ContainerBottom>
                    </ShadowDecorator>
                </OpacityDecorator>
            </ScaleDecorator>
        )
    } 
    return (
        <ContainerBoxers>


            <GestureHandlerRootView>
                <DraggableFlatList
                ref={ref}
                data={data}
                keyExtractor={(item) => item.id}
                onDragEnd={onDragEnd}
                renderItem={renderItem}
                />
            </GestureHandlerRootView>


            <DualContainerOptions>
                <ButtonOption>
                    <TextDualOptions>Salvar</TextDualOptions>
                </ButtonOption>
            </DualContainerOptions>

        </ContainerBoxers>

    )
}



export default SecaoDragDropComponent



