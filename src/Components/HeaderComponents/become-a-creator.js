import React from 'react'
import { Flex, Text, Button } from '@chakra-ui/react'

const BecomeACreator = () => {
    return (
        <Flex flexDir={'column'} mt={'5rem'}>
            <Text textAlign={'center'} fontSize={'37px'} fontWeight={800}>
                Want to become a creator?
            </Text>
            <Flex flexDir={'column'} padding={'1.2rem'} alignItems={'center'}>
                <Text textAlign={'center'} fontSize={'30px'} fontWeight={500}>
                    Join here now
                </Text>
                <Button width={'20%'}>Start Here!</Button>
            </Flex>
        </Flex>
    )
}
export default BecomeACreator
