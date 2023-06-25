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
import BoxerScrollCards from './components/BoxerScrollCards'
import BoxerScrollCardAdd from './components/BoxerScrollCardAdd'

import ContainerSeparatorIcon from './components/ContainerSeparatorIcon'
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
                    <BoxScrollCardFatura viewMoney={viewMoney} />
                    <BoxerScrollCards virtualcard={true} final={'2874'} block={false} />
                    <BoxerScrollCards virtualcard={false} final={'8879'} block={true} />
                    <BoxerScrollCardAdd />
                </ScrollContainerCards>


                <ContainerSeparatorIcon title={'Pix'} />

            </ContainerScrollView>

        </ContainerMain>
    )
}