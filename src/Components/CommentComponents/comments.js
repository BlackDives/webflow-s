import React, { useState, useEffect } from 'react'
import {
    Flex,
    UnorderedList,
    ListItem,
    Input,
    Button,
    Link,
    Text,
} from '@chakra-ui/react'
import CommentForm from './comment-form'

const Comments = () => {
    const [items, setItems] = useState([])

    const addItems = (text) => {
        setItems([...items, { value: text, name: 'Kamron' }])
    }

    return (
        <Flex flexDir={'column'} width={'50%'} padding={'1.2rem'}>
            <Text fontWeight={800} fontSize={'3xl'}>
                Comments
            </Text>
            <CommentForm addItems={addItems} />
            <UnorderedList
                display={'flex'}
                flexDir={'column'}
                listStyleType={'none'}
                p={'1.2rem'}
                m={0}
            >
                {items.map((data) => {
                    return (
                        <>
                            <ListItem>
                                {' '}
                                <Flex
                                    flexDir={'row'}
                                    padding={'1.2rem'}
                                    justifyContent={'space-between'}
                                >
                                    <Flex>
                                        {' '}
                                        <Flex
                                            height={'50px'}
                                            width={'50px'}
                                            background={'black'}
                                            mr={'1.1rem'}
                                        ></Flex>
                                        <Flex flexDir={'column'}>
                                            <Text fontWeight={800}>
                                                {data.name}
                                            </Text>
                                            <Text>{data.value}</Text>
                                        </Flex>{' '}
                                    </Flex>
                                    <Flex>
                                        {new Date().toLocaleDateString()}
                                    </Flex>
                                </Flex>
                            </ListItem>
                            <hr />
                        </>
                    )
                })}
            </UnorderedList>
        </Flex>
    )
}
export default Comments
