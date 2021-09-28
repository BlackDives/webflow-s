import React from 'react'
import { Flex } from '@chakra-ui/react'
import NavHeader from './Components/NavComponents/nav-header'
import LandingHeader from './Components/HeaderComponents/landing-header'
import Featured from './Components/HeaderComponents/featured'
import Comments from './Components/CommentComponents/comments'
import MustRead from 'Components/HeaderComponents/must-read'
import BecomeACreator from 'Components/HeaderComponents/become-a-creator'
import Footer from 'Components/FooterComponents/footer'

const App = () => {
    return (
        <>
            <NavHeader />
            <LandingHeader />
            <Featured />
            <MustRead />
            <BecomeACreator />
            <Footer />
            {/* <Comments /> */}
        </>
    )
}

export default App
