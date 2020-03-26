import React, {Fragment} from 'react'
import {useAsync} from 'react-async'
import {Link as RouterLink} from 'react-router-dom'
import {
  Text,
  AspectRatioBox,
  Image,
  Heading,
  List,
  ListItem,
  Link,
  Box,
  Grid,
} from '@chakra-ui/core'
import {fetchCountry} from 'api'

const formatAsList = values => {
  // const listFormatter = new Intl.ListFormat('en', {style: 'narrow'})
  // return listFormatter.format(values.filter(Boolean))
}

const CountryInfo = ({countryCode}) => {
  const {data: country, error} = useAsync({
    countryCode,
    promiseFn: fetchCountry,
    watch: countryCode,
    suspense: true,
  })

  return (
    <Fragment>
      <div id="light2">
      {error ? (
        <Text
          textAlign="center"
          fontWeight="600"
          color="gray.500"
          fontSize="lg"
        >
          There is no country with an alpha code of ‘{countryCode}’. Try a
          different one!
        </Text>
      ) : null}
      {country ? (
        <Grid
          as="article"
          aria-label={`Details of selected country: ${country.name}`}
          templateColumns={{md: '400px 1fr'}}
          gap={{md: '16'}}
          alignItems="start"
        >
          <AspectRatioBox maxW="100%" ratio={4 / 3}>
            <Image src={country.flag} alt="" objectFit="cover" />
          </AspectRatioBox>

          <Box mt="8">
            <Heading title={country.name} as="h3" size="xl" isTruncated>
              {country.name}
            </Heading>

            <Grid mt="6" templateColumns={{lg: '1fr 1fr'}}>
              <List>
                <ListItem>
                  <Text as="span" fontWeight="600">
                    Native Name:
                  </Text>{' '}
                  {country.nativeName}
                </ListItem>
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
                    Sub Region:
                  </Text>{' '}
                  {country.subregion}
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="600">
                    Capital:
                  </Text>{' '}
                  {country.capital}
                </ListItem>
              </List>
              <List mt={{base: '8', lg: '0'}}>
                <ListItem>
                  <Text as="span" fontWeight="600">
                    Top Level Domain:
                  </Text>{' '}
                  {formatAsList(country.topLevelDomain)}
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="600">
                    Currencies:
                  </Text>{' '}
                  {formatAsList(country.currencies.map(({name}) => name))}
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="600">
                    Languages:
                  </Text>{' '}
                  {formatAsList(country.languages.map(({name}) => name))}
                </ListItem>
              </List>
            </Grid>
            <Text mt="10" d="flex" flexWrap="wrap" alignItems="center">
              {country.borders.length === 0 ? (
                <Text as="span" fontWeight="600">
                  No Border Countries
                </Text>
              ) : (
                <Fragment>
                  <Text as="span" fontWeight="600">
                    Border Countries:
                  </Text>{' '}
                  {country.borders.map(border => (
                    <Link
                      as={RouterLink}
                      key={border}
                      to={`/details/${border}`}
                      bg="gray.200"
                      rounded="sm"
                      overflow="hidden"
                      py="1"
                      px="2"
                      fontWeight="600"
                      letterSpacing="wide"
                      fontSize="xs"
                      m="1"
                    >
                      {border}
                    </Link>
                  ))}
                </Fragment>
              )}
            </Text>
          </Box>
        </Grid>
      ) : null}
      </div>
    </Fragment>
  )
}

export default CountryInfo
