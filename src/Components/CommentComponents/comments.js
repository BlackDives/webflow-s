import React, { useState } from 'react'
import {
    Flex,
    UnorderedList,
    ListItem,
    Input,
    Button,
    Link,
    Text,
} from '@chakra-ui/react'

const Comments = () => {
    // const [comms, addComms] = useState(['Comment', 'Another Comment'])
    const comms = ['kam']

    return (
        <Flex flexDir={'column'}>
            <Input placeholder={'Type your thoughts'} />
            <Flex flexDir={'column'}>
                {comms.map((data) => {
                    return (
                        <>
                            <Text padding={'10px'}>{data}</Text>
                            <hr />
                        </>
                    )
                })}
            </Flex>
            <Button>Submit</Button>
        </Flex>
    )
}
export default Comments
