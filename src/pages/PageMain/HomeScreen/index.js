import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

// Animations
import * as Animatable from 'react-native-animatable'

// components

// Containers
import ContainerSeparatorOptions from './components/ContainerSeparatorOptions'
import ContainerSeparatorIcon from './components/ContainerSeparatorIcon'
import ContainerMain from './components/ContainerMain'
import ContainerHeader from './components/ContainerHeader'
import ContainerScrollView from './components/ContainerScrollView'
import ContainerSeparatorSection from './components/ContainerSeparatorSection'
import ContainerSection from './components/ContainerSection'

//Secao Components
import SecaoHeader from './components/SecaoHeader'
import SecaoDragDropComponent from './components/SecaoDragDropComponent'

// Boxers
import BoxerAccount from './components/BoxerAccount'
import BoxerInvest from './components/BoxerInvest'
import BoxerScrollCards from './components/BoxerScrollCards'
import BoxerScrollCardAdd from './components/BoxerScrollCardAdd'
import BoxScrollCardFatura from './components/BoxScrollCardFatura'
import BoxerPix from './components/BoxerPix'
import BoxerAtalhos from './components/BoxerAtalhos'
import BoxerAds from './components/BoxerAds'
import BoxerConfigurarSecao from './components/BoxerConfigurarSecao'
// Scroll Containers
import ScrollContainerCards from './components/ScrollContainersBoxers'


// animatable custom components

export default function HomeScreen() {

    // state view money eye
    const [viewMoney, setViewMoney] = useState(true)
    const [configSection, setConfigSection] = useState(false)

    const [data, setData] = useState([
        { id: 1, name: 'Saldos' },
        { id: 2, name: 'C6 Invest' },
        { id: 3, name: 'Meus Cartões' },
        { id: 4, name: 'Pix' },
        { id: 5, name: 'Meus Atalhos' },
        { id: 6, name: 'Para Voçe' },

    ])


    const setViewMoneyClick = () => {
        setViewMoney(!viewMoney)
    }

    const setConfigSectionClick = () => {
        setConfigSection(!configSection)
    }

    const setOrderData = (data) => {
        setData(data)
        console.log(data)
    }


    return (
        <ContainerMain>
            {configSection ?
                (
                    <Animatable.View animation="fadeInRight" style={{ flex: 1, backgroundColor: 'transparent', gap: 20, margin: 10 }} duration={200}>
                        <SecaoHeader configSection={setConfigSectionClick} />
                        <ContainerSeparatorSection title={'Pressione e arraste para reordenar as seções da tela inicial'} />
                        <SecaoDragDropComponent order={setOrderData} data_set={data} />
                    </Animatable.View>
                )
                :
                (
                    <ContainerMain>
                        <ContainerHeader viewMoney={setViewMoneyClick} />
                        <ContainerScrollView>
                            {data.map((item) => (
                                <ContainerSection key={item.id}>
                                    {/* Renderizar o conteúdo do container com base nas informações do item */}
                                    {item.name === 'Saldos' && <BoxerAccount viewMoney={viewMoney} />}
                                    {item.name === 'C6 Invest' && (
                                        <>
                                            <ContainerSeparatorSection title={'C6 Invest'} />
                                            <BoxerInvest viewMoney={viewMoney} />
                                        </>
                                    )}
                                    {item.name === 'Meus Cartões' && (
                                        <>
                                            <ContainerSeparatorOptions title={'Meus Cartoes'} btn_text={'Cartão Virtual'} />
                                            <ScrollContainerCards>
                                                <BoxScrollCardFatura viewMoney={viewMoney} />
                                                <BoxerScrollCards virtualcard={true} final={'2874'} block={false} />
                                                <BoxerScrollCards virtualcard={false} final={'8879'} block={true} />
                                                <BoxerScrollCardAdd />
                                            </ScrollContainerCards>
                                        </>
                                    )}
                                    {item.name === 'Pix' && (
                                        <>
                                            <ContainerSeparatorIcon title={'Pix'} />
                                            <BoxerPix />
                                        </>
                                    )}
                                    {item.name === 'Meus Atalhos' && <BoxerAtalhos />}
                                    {item.name === 'Para Voçe' && (
                                        <>
                                            <ContainerSeparatorOptions title={'Para Você'} btn_text={'Exibir menos '} />
                                            <ScrollContainerCards>
                                                <BoxerAds bacground_img={require('../../../assets/page_main/ads/back2.jpg')} />
                                                <BoxerAds bacground_img={require('../../../assets/page_main/ads/back1.jpg')} />
                                                <BoxerAds bacground_img={require('../../../assets/page_main/ads/back3.jpg')} />
                                            </ScrollContainerCards>
                                        </>
                                    )}
                                </ContainerSection>
                            ))}
                            <BoxerConfigurarSecao configSection={setConfigSectionClick} />
                        </ContainerScrollView>
                    </ContainerMain>
                )
            }
        </ContainerMain>
    )
}










