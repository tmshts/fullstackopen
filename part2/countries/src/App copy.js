import { useState, useEffect } from 'react'
import axios from 'axios'
import Selected from './components/Selected'
import Filter from './components/Filter'
import './index.css'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [selectedCountries, setSelectedCountries] = useState([])

  useEffect(() => {
      axios
        .get(`https://restcountries.com/v3.1/all`)
        .then(response => {
          setAllCountries(response.data)
        })
  }, [])

  const handleSearchCountry = (event) => {
    let search_country = event.target.value
    const selected_countries = allCountries.filter(country => 
      country.name.common.toUpperCase().includes(search_country.toUpperCase())
      ) 
    //console.log(selected_countries)
    setSelectedCountries(selected_countries)
  }

  return(
    <div>
        <Filter handleSearchCountry={handleSearchCountry} />
        <Selected selectedCountries={selectedCountries} />
    </div>
  )

}

export default App
