import React from 'react'
import {FormControl, Select} from '@chakra-ui/core'

const RegionFilter = ({regionText, onChange}) => {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

  const onChangeHandler = e => {
    const {name, value} = e.target

    onChange(name, value)
  }

  return (
    <FormControl>
      <Select
        name="regionFilter"
        id="regionFilter"
        aria-label="Filter by Region"
        placeholder="Filter by Region"
        value={regionText}
        onChange={onChangeHandler}
      >
        {regions.map(region => (
          <option key={region.toString()} value={region}>
            {region}
          </option>
        ))}
      </Select>
    </FormControl>
  )
}

export default RegionFilter
