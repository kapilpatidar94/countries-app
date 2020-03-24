import React from 'react'
import {Box, Heading} from '@chakra-ui/core'

const Header = () => (
  <Box as="header" py="6" borderBottomWidth="4px">
    <Box maxW="5xl" mx="auto" px="5">
      <Heading as="h1" size="md">
        Where in the world?
      </Heading>
    </Box>
  </Box>
)

export default Header
