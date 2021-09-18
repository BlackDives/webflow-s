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
import { FaSearch } from 'react-icons/fa'

const NavHeader = () => {
    const Links = [
        { title: 'HOME', address: '#' },
        { title: 'COMICS', address: '#' },
        { title: 'ANIMATIONS', address: '#' },
    ]

    return (
        <Flex
            height={'100px'}
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            background={'#80B192'}
        >
            <UnorderedList display={'flex'} listStyleType={'none'}>
                {Links.map((data) => {
                    return (
                        <ListItem p={'1rem'}>
                            <Link href={data.address} textDecor={'none'}>
                                <Text color={'white'} fontSize={'20px'}>
                                    {data.title}
                                </Text>
                            </Link>
                        </ListItem>
                    )
                })}
            </UnorderedList>
            <Flex paddingX={'20px'}>
                <Button
                    leftIcon={<FaSearch />}
                    borderRadius={'20px'}
                    borderRightRadius={0}
                    border={'1px solid white'}
                    background={'white'}
                    padding={'10px 15px'}
                    borderRight={'none'}
                    color={'#80B192'}
                />
                <Input
                    // padding={'10px 30px'}
                    borderRadius={'20px'}
                    border={'1px solid white'}
                    borderLeftRadius={0}
                    borderLeft={'none'}
                    placeholder={'Search..'}
                />
            </Flex>
        </Flex>
    )
}
export default NavHeader
