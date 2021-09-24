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
    const [items, setItems] = useState([
        { value: 'Hey, my name is kam and I am getting frustrated.' },
    ])
    const [commentL, setCommentL] = useState('')

    const addItems = (text) => {
        setItems([...items, { value: text }])
    }

    const getValv = (val) => {
        setCommentL(val.target.value)
    }

    return (
        <Flex flexDir={'column'} width={'50%'} padding={'1.2rem'}>
            <Text>Comments</Text>
            <CommentForm />
            <UnorderedList display={'flex'} flexDir={'column'}>
                {items.map((data) => {
                    return (
                        <>
                            <ListItem>
                                {' '}
                                <Text padding={'10px'}>{data.value}</Text>
                            </ListItem>
                            <hr />
                        </>
                    )
                })}
            </UnorderedList>
            <Text>{commentL}</Text>
        </Flex>
    )
}
export default Comments
