import React from 'react'
import {
    Flex,
    UnorderedList,
    ListItem,
    Input,
    Form,
    Button,
    Link,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
} from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

const NavHeader = () => {
    const Links = [
        { title: 'HOME', address: '#' },
        { title: 'COMICS', address: '#' },
        { title: 'ANIMATIONS', address: '#' },
    ]

    const { isOpen, onOpen, onClose } = useDisclosure()

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
                    margin={'0 10px'}
                    onClick={onOpen}
                    borderRadius={'20px'}
                >
                    Login
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Login</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl>
                                <FormLabel>Username:</FormLabel>
                                <Input placeholder="Username" />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Password:</FormLabel>
                                <Input placeholder="Password" />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Flex
                                flexDir={'row'}
                                justifyContent={'space-between'}
                                width={'100%'}
                            >
                                <Button
                                    onClick={onClose}
                                    backgroundColor={'#80b192'}
                                >
                                    Login
                                </Button>
                                <Button>Sign Up</Button>
                            </Flex>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                <Button
                    leftIcon={<FaSearch />}
                    borderRadius={'20px'}
                    borderRightRadius={0}
                    background={'white'}
                    padding={'10px 15px'}
                    borderRight={'none'}
                    color={'#80B192'}
                />
                <Input
                    // padding={'10px 30px'}
                    borderRadius={'20px'}
                    borderLeftRadius={0}
                    borderLeft={'none'}
                    placeholder={'Search..'}
                    _placeholder={{ color: 'black' }}
                    background={'white'}
                />
            </Flex>
        </Flex>
    )
}
export default NavHeader
