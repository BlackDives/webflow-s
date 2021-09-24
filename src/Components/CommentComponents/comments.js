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
            <Text>Comments</Text>
            <CommentForm addItems={addItems} />
            <UnorderedList
                display={'flex'}
                flexDir={'column'}
                listStyleType={'none'}
            >
                {items.map((data) => {
                    return (
                        <>
                            <ListItem>
                                {' '}
                                <Flex
                                    border={'1px solid black'}
                                    flexDir={'row'}
                                    padding={'1.2rem'}
                                >
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
                                    </Flex>
                                    <Flex>{new Date().toString()}</Flex>
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
