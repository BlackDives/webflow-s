import React, { useState } from 'react'
import { Button, Input, Flex, FormControl, Textarea } from '@chakra-ui/react'

const CommentForm = ({ addItems }) => {
    const [comment, setComment] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(comment)
        addItems(comment)
        setComment('')
    }
    return (
        <Flex p={'1.2rem'}>
            <form onSubmit={handleSubmit}>
                <FormControl display={'flex'} flexDir={'column'} width={'100%'}>
                    <Textarea
                        type={'text'}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        resize={'none'}
                        p={'5rem'}
                    />
                    <Button type={'submit'} width={'25%'} my={'10px'}>
                        SUBMIT
                    </Button>
                </FormControl>
            </form>
        </Flex>
    )
}
export default CommentForm
