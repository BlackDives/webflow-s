import React from 'react'
import { Flex } from '@chakra-ui/react'
import NavHeader from './Components/NavComponents/nav-header'
import LandingHeader from './Components/HeaderComponents/landing-header'
import Featured from './Components/HeaderComponents/featured'

const App = () => {
    return (
        <>
            <NavHeader />
            <LandingHeader />
            <Featured />
        </>
    )
}

export default App
