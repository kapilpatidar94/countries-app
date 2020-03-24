import React from 'react'
import {Box} from '@chakra-ui/core'

const Container = ({children}) => (
  <Box maxW="5xl" mx="auto" px="5">
    {children}
  </Box>
)

export default Container
