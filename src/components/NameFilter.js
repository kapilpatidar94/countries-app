import React from 'react'
import {
  FormControl,
  InputLeftElement,
  Icon,
  Input,
  InputGroup,
} from '@chakra-ui/core'

const NameFilter = ({nameText, onChange}) => {
  const onChangeHandler = e => {
    const {name, value} = e.target

    onChange(name, value)
  }

  return (
    <FormControl>
      <InputGroup>
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Input
          name="nameFilter"
          id="nameFilter"
          aria-label="Search by name"
          placeholder="Search for a country…"
          value={nameText}
          onChange={onChangeHandler}
        />
      </InputGroup>
    </FormControl>
  )
}

export default NameFilter
