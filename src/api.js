export const fetchCountries = async ({signal}) => {
  const response = await fetch('https://restcountries.eu/rest/v2/all', {signal})

  if (!response.ok) {
    throw new Error(response.status)
  }

  return response.json()
}

export const fetchCountry = async ({countryCode}, {signal}) => {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${countryCode}`,
    {
      signal,
    },
  )

  if (!response.ok) {
    throw new Error(response.status)
  }

  return response.json()
}
