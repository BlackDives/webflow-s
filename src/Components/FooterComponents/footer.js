import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <hr />

            <Flex flexDir={'column'} mt={'2rem'} mb={'4rem'}>
                <Flex flexDir={'row'} justifyContent={'center'}>
                    <Flex mx={'15px'}>
                        <FaFacebook size={'25px'} />
                    </Flex>
                    <Flex mx={'15px'}>
                        {' '}
                        <FaTwitter size={'25px'} />
                    </Flex>
                    <Flex mx={'15px'}>
                        {' '}
                        <FaInstagram size={'25px'} />
                    </Flex>
                    <Flex mx={'15px'}>
                        {' '}
                        <FaYoutube size={'25px'} />
                    </Flex>
                </Flex>
                <Flex flexDir={'row'} justifyContent={'center'} mt={'1.2rem'}>
                    <Text mx={'15px'}>About </Text>
                    <Text mx={'15px'}>Feedback </Text>
                    <Text mx={'15px'}>Help </Text>
                    <Text mx={'15px'}>Terms </Text>
                    <Text mx={'15px'}>Privacy </Text>
                </Flex>
            </Flex>
        </>
    )
}
export default Footer
