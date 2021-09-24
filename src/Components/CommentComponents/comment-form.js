import React, { useState } from 'react'
import { Button, Input, Flex, FormControl } from '@chakra-ui/react'

const CommentForm = ({ addItems }) => {
    const [comment, setComment] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(comment)
        addItems(comment)
        setComment('')
    }
    return (
        <Flex>
            <form onSubmit={handleSubmit}>
                <FormControl display={'flex'}>
                    <Input
                        type={'text'}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button type={'submit'}>Submit</Button>
                </FormControl>
            </form>
        </Flex>
    )
}
export default CommentForm
