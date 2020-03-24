import React, {useState, Fragment} from 'react'
import {Box} from '@chakra-ui/core'
import CountryList from 'components/CountryList'
import NameFilter from 'components/NameFilter'
import RegionFilter from 'components/RegionFilter'
import Page from 'components/Page'
import Loading from 'components/Loading'

const CountryPage = () => {
  const [filters, setFilters] = useState({nameFilter: '', regionFilter: ''})
  const onChangeHandler = (filter, value) => {
    setFilters({...filters, [filter]: value})
  }

  return (
    <Page
      title="Countries"
      header={
        <Fragment>
          <NameFilter
            nameText={filters.nameFilter}
            onChange={onChangeHandler}
          />
          <Box justifySelf={{base: 'start', sm: 'end'}}>
            <RegionFilter
              regionText={filters.regionFilter}
              onChange={onChangeHandler}
            />
          </Box>
        </Fragment>
      }
    >
      <Loading label="Loading countries…" color="blue.500">
        <CountryList filters={filters} />
      </Loading>
    </Page>
  )
}

export default CountryPage
