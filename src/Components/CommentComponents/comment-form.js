import React, { useState } from 'react'
import { Button, Input, Flex, FormControl } from '@chakra-ui/react'

const CommentForm = () => {
    const [comment, setComment] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(comment)
    }
    return (
        <Flex>
            <FormControl display={'flex'} onSubmit={handleSubmit}>
                <Input
                    type={'text'}
                    // value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <Button type={'submit'}>Submit</Button>
            </FormControl>
        </Flex>
    )
}
export default CommentForm
