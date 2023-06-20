import React, { useState } from 'react'


// components

import ContainerMain from './components/ContainerMain'
import ContainerHeader from './components/ContainerHeader'
import ContainerScrollView from './components/ContainerScrollView'
import ContainerSeparatorSection from './components/ContainerSeparatorSection'
import BoxerAccount from './components/BoxerAccount'
import BoxerInvest from './components/BoxerInvest'
import ContainerSeparatorOptions from './components/ContainerSeparatorOptions'
import ScrollContainerCards from './components/ScrollContainersBoxers'
import BoxScrollCardFatura from './components/BoxScrollCardFatura'


export default function HomeScreen() {

    // state view money eye
    const [viewMoney, setViewMoney] = useState(true)

    const setViewMoneyClick = () => {
        setViewMoney(!viewMoney)
    }

    return (
        <ContainerMain>
            <ContainerHeader viewMoney={setViewMoneyClick} />

            <ContainerScrollView>
                <BoxerAccount viewMoney={viewMoney} />
                <ContainerSeparatorSection title={'C6 Invest'} />
                <BoxerInvest viewMoney={viewMoney} />
                <ContainerSeparatorOptions title={'Meus Cartoes'} btn_text={'Cartão Virtual'} />
                <ScrollContainerCards>
                    <BoxScrollCardFatura viewMoney={viewMoney}/>
                    <BoxScrollCardFatura viewMoney={viewMoney}/>
                </ScrollContainerCards>
                
                

            </ContainerScrollView>

        </ContainerMain>
    )
}