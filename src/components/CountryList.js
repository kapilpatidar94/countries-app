import React, {Fragment} from 'react'
import {useAsync} from 'react-async'
import {Link} from 'react-router-dom'
import {ListItem, Grid, Text} from '@chakra-ui/core'
import {fetchCountries} from 'api'
import Country from './Country'

const CountryList = ({filters}) => {
  const {data: countries, error} = useAsync({
    promiseFn: fetchCountries,
    suspense: true,
  })
  const nameRegex = new RegExp(filters.nameFilter, 'gi')
  const regionRegex = new RegExp(filters.regionFilter)
  const filteredCountries = countries
    ? countries
        .filter(({name}) => name.match(nameRegex))
        .filter(({region}) => region.match(regionRegex))
    : null

  return (
    <Fragment>
      {error ? (
        <Text
          textAlign="center"
          fontWeight="600"
          color="gray.500"
          fontSize="lg"
        >
          There was an error fetching the countries. Try again later!
        </Text>
      ) : null}
      {countries ? (
        filteredCountries.length === 0 ? (
          <Text
            textAlign="center"
            fontWeight="600"
            color="gray.500"
            fontSize="lg"
          >
            There are no countries matching this criteria!
          </Text>
        ) : (
          <Grid
            as="ul"
            aria-label="List of countries, search results"
            listStyleType="none"
            templateColumns="repeat(auto-fill, minmax(12rem, 1fr))"
            rowGap={['6', '8']}
            columnGap={['4', '6']}
          >
            {filteredCountries.map(country => (
              <ListItem key={country.alpha3Code.toString()}>
                <Link
                  to={`/details/${country.alpha3Code}`}
                  aria-label={country.name}
                >
                  <Country country={country} />
                </Link>
              </ListItem>
            ))}
          </Grid>
        )
      ) : null}
    </Fragment>
  )
}

export default CountryList
