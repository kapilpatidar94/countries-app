import React from 'react'
import {useParams, Link as RouterLink} from 'react-router-dom'
import {Text, Icon, Link, Stack} from '@chakra-ui/core'
import Page from 'components/Page'
import CountryInfo from 'components/CountryInfo'
import Loading from 'components/Loading'

const CountryDetailsPage = () => {
  const {countryCode} = useParams()

  return (
    <Page
      title="Country Details"
      header={
        <Link
          as={RouterLink}
          to="/"
          bg="white"
          color="gray.600"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          overflow="hidden"
          px="3"
          py="2"
          justifySelf="start"
        >
          <Stack spacing="1" isInline alignItems="center">
            <Icon name="arrow-back" color="gray.300" />
            <Text as="span">Back</Text>
          </Stack>
        </Link>
      }
    >
      <Loading label="Loading country details…" color="blue.500">
        <CountryInfo countryCode={countryCode} />
      </Loading>
    </Page>
  )
}

export default CountryDetailsPage
