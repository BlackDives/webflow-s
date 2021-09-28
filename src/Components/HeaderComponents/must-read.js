import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import FeatureBox from './feature-box'

const MustRead = () => {
    return (
        <Flex flexDir={'column'}>
            <Text fontSize={'37px'} fontWeight={800} padding={'10px 50px'}>
                Must Read
            </Text>
            <Flex padding={'10px 50px'}>
                <FeatureBox title={'Title'} view={'0'} genre={'genre'} />
                <FeatureBox title={'Title'} view={'0'} genre={'genre'} />
                <FeatureBox title={'Title'} view={'0'} genre={'genre'} />
            </Flex>
        </Flex>
    )
}

export default MustRead
