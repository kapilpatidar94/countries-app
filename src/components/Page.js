import React, {useRef, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {Box, Heading, Grid} from '@chakra-ui/core'
import Container from './Container'

const Page = ({title, header, children}) => {
  const location = useLocation()
  const headingRef = useRef(null)

  useEffect(() => {
    headingRef.current.focus()
  }, [location])

  return (
    <Box as="section" bg="gray.50" minH="100vh" py="8">
      <Container>
        <Box as="header">
          <Heading
            as="h2"
            ref={headingRef}
            tabIndex="-1"
            size="sm"
            textTransform="uppercase"
            letterSpacing="wide"
            color="gray.600"
          >
            {title}
          </Heading>

          <Grid mt="6" autoFlow={{base: 'row', sm: 'column'}} gap="5">
            {header}
          </Grid>
        </Box>

        <Box mt="12">{children}</Box>
      </Container>
    </Box>
  )
}

export default Page
