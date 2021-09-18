import React from 'react'
import {
    Flex,
    UnorderedList,
    ListItem,
    Input,
    Button,
    Link,
    Text,
} from '@chakra-ui/react'

const LandingHeader = () => {
    return (
        <Flex
            background={'#6A8D92'}
            height={'60vh'}
            flexDir={'column'}
            justifyContent={'center'}
        >
            <Flex flexDir={'column'} padding={'1rem'}>
                <Text color={'white'} fontSize={'12px'}>
                    EXPLORE THE CONTENT
                </Text>
                <Text color={'white'} fontSize={'45px'}>
                    IVY: THE SOULLESS LIME
                </Text>
                <Text color={'white'}>
                    Join Roman as he goes on a conquest to fill his Vibe Level.
                </Text>
                <Flex marginTop={'20px'}>
                    <Button
                        background={'white'}
                        padding={'15px'}
                        border={'none'}
                        borderRadius={'5px'}
                        m={'10px'}
                    >
                        READ NOW
                    </Button>
                    <Button
                        background={'transparent'}
                        padding={'15px'}
                        border={'2px solid white'}
                        borderRadius={'5px'}
                        m={'10px'}
                        color={'white'}
                    >
                        DETAILS
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default LandingHeader
