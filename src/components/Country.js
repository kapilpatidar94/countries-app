import React from 'react'
import {
  AspectRatioBox,
  Image,
  Box,
  Heading,
  List,
  ListItem,
  Text,
  PseudoBox,
} from '@chakra-ui/core'

const Country = ({country}) => (
  <PseudoBox
    as="article"
    bg="white"
    borderWidth="1px"
    rounded="lg"
    overflow="hidden"
    minH="100%"
    transition="all 0.15s ease"
    _hover={{shadow: 'lg', transform: 'translateZ(0) translateY(-1px)'}}
  >
    <AspectRatioBox  ratio={4 / 3}>
      <Image src={country.flag} alt="" objectFit="cover" />
    </AspectRatioBox>
    <Box p={['5', '6']}>
      <Heading title={country.name} as="h3" size="sm" isTruncated>
        {country.name}
      </Heading>
      <List mt="3">
        <ListItem>
          <Text as="span" fontWeight="600">
            Population:
          </Text>{' '}
          {country.population.toLocaleString()}
        </ListItem>
        <ListItem>
          <Text as="span" fontWeight="600">
            Region:
          </Text>{' '}
          {country.region}
        </ListItem>
        <ListItem>
          <Text as="span" fontWeight="600">
            Capital:
          </Text>{' '}
          {country.capital}
        </ListItem>
      </List>
    </Box>
  </PseudoBox>
)

export default Country
