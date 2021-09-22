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

const FeatureBox = ({ title, views, genre }) => {
    return (
        <Flex
            background={'#80B192'}
            height={'250px'}
            width={'250px'}
            m={'10px 5px'}
            p={'10px'}
            flexDir={'column'}
            justifyContent={'space-between'}
            borderRadius={'20px'}
        >
            <Flex flexDirection={'column'}>
                <Text fontSize={'20px'} fontWeight={700}>
                    {title}
                </Text>
                <Text>{views} views</Text>
            </Flex>
            <Flex>{genre}</Flex>
        </Flex>
    )
}
export default FeatureBox
