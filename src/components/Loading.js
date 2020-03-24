import React, {Suspense} from 'react'
import {Flex, Spinner} from '@chakra-ui/core'

const Loading = ({label = 'Loading…', color = 'gray.500', children}) => (
  <Suspense
    fallback={
      <Flex alignItems="center" justifyItems="center" direction="column" my="8">
        <Spinner
          label={label}
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color={color}
          size="xl"
        />
      </Flex>
    }
  >
    {children}
  </Suspense>
)

export default Loading
