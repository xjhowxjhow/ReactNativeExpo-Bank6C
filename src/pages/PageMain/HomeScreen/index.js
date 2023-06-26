import React, { useState } from 'react'

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
    const [configSection, setConfigSection] = useState(true)

    const setViewMoneyClick = () => {
        setViewMoney(!viewMoney)
    }

    const  setConfigSectionClick = () => {
        setConfigSection(!configSection)
    }
    return (

        <ContainerMain>

            {configSection ?
                (
                    <Animatable.View animation="fadeInRight" style={{ flex: 1, backgroundColor: 'transparent' }} duration={200}>
                        <BoxerConfigurarSecao configSection={setConfigSectionClick} />
                    </Animatable.View>


                )
                :
                (
                    <ContainerMain>
                        <ContainerHeader viewMoney={setViewMoneyClick} />
                        <ContainerScrollView>
                            <ContainerSection>
                                <BoxerAccount viewMoney={viewMoney} />
                            </ContainerSection>
                            <ContainerSection>
                                <ContainerSeparatorSection title={'C6 Invest'} />
                                <BoxerInvest viewMoney={viewMoney} />
                            </ContainerSection>
                            <ContainerSection>
                                <ContainerSeparatorOptions title={'Meus Cartoes'} btn_text={'Cartão Virtual'} />
                                <ScrollContainerCards>
                                    <BoxScrollCardFatura viewMoney={viewMoney} />
                                    <BoxerScrollCards virtualcard={true} final={'2874'} block={false} />
                                    <BoxerScrollCards virtualcard={false} final={'8879'} block={true} />
                                    <BoxerScrollCardAdd />
                                </ScrollContainerCards>
                            </ContainerSection>
                            <ContainerSection>
                                <ContainerSeparatorIcon title={'Pix'} />
                                <BoxerPix />
                            </ContainerSection>
                            <ContainerSection>
                                <BoxerAtalhos />
                            </ContainerSection>
                            <ContainerSection>
                                <ContainerSeparatorOptions title={'Para Você'} btn_text={'Exibir menos '} />
                                <ScrollContainerCards>
                                    <BoxerAds bacground_img={require('../../../assets/page_main/ads/back2.jpg')} />
                                    <BoxerAds bacground_img={require('../../../assets/page_main/ads/back1.jpg')} />
                                    <BoxerAds bacground_img={require('../../../assets/page_main/ads/back3.jpg')} />
                                </ScrollContainerCards>
                            </ContainerSection>
                            <BoxerConfigurarSecao configSection={setConfigSectionClick} />
                        </ContainerScrollView>
                    </ContainerMain>
                )}

        </ContainerMain>
    )
}