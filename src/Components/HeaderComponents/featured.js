import React from 'react'
import {
    Flex,
    UnorderedList,
    ListItem,
    Grid,
    Button,
    Link,
    Text,
} from '@chakra-ui/react'
import FeatureBox from './feature-box'

const Featured = () => {
    const Dates = [
        {
            day: 'SUNDAY',
            address: '',
            flag: false,
            setFlag: function () {
                this.flag = !this.flag
            },
        },
        { day: 'MONDAY', address: '', flag: false },
        { day: 'TUESDAY', address: '', flag: false },
        { day: 'WEDNESDAY', address: '', flag: false },
        { day: 'THURSDAY', address: '', flag: false },
        { day: 'FRIDAY', address: '', flag: true },
        { day: 'SATURDAY', address: '', flag: false },
    ]

    function setFalse() {
        this.flag = true
    }

    return (
        <Flex margin={0} flexDir={'column'}>
            <Flex width={'100%'}>
                <UnorderedList
                    display={'flex'}
                    flexDir={'row'}
                    width={'100%'}
                    justifyContent={'center'}
                    listStyleType={'none'}
                    borderBottom={'1px solid black'}
                >
                    {Dates.map((data) => {
                        return (
                            <ListItem
                                padding={'20px'}
                                background={data.flag ? '#80B192' : 'white'}
                            >
                                <Link
                                    href={data.address}
                                    textDecor={'none'}
                                    _hover={{ color: '#80B192' }}
                                    onclick={!data.flag}
                                >
                                    <Text color={'black'}>{data.day}</Text>
                                </Link>
                            </ListItem>
                        )
                    })}
                </UnorderedList>
            </Flex>
            <Grid gridTemplateColumns={'repeat(5, 1fr)'} padding={'10px  50px'}>
                <FeatureBox title={'IVY'} views={'346,328'} genre={'action'} />
                <FeatureBox title={'IVY'} views={'346,328'} genre={'action'} />
                <FeatureBox title={'IVY'} views={'346,328'} genre={'action'} />
                <FeatureBox title={'IVY'} views={'346,328'} genre={'action'} />
                <FeatureBox title={'IVY'} views={'346,328'} genre={'action'} />
                <FeatureBox title={'IVY'} views={'346,328'} genre={'action'} />
                <FeatureBox title={'IVY'} views={'346,328'} genre={'action'} />
                <FeatureBox title={'IVY'} views={'346,328'} genre={'action'} />
                <FeatureBox title={'IVY'} views={'346,328'} genre={'action'} />
                <FeatureBox title={'IVY'} views={'346,328'} genre={'action'} />
            </Grid>
        </Flex>
    )
}

export default Featured
