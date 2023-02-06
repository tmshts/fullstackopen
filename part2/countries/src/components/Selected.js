import Country from './Country'
import Button from './Button'

const Selected = ({selectedCountries, setSelectedCountries}) => {
    if (selectedCountries.length > 10) {  
        return (
                <div>
                    <p>Too many matches, specify another filter</p>
                </div>
            )
        }
    else if (selectedCountries.length > 1 && selectedCountries.length <= 10) {
        //console.log(selectedCountries)
        return (
            <div>
                {selectedCountries.map((country) => {
                    return (
                        <div>
                            <div key={country.name.common}>
                                {country.name.common} <Button setSelectedCountries={setSelectedCountries} country={country }/>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
    else if (selectedCountries.length === 1) {
        //console.log(selectedCountries)
        return (
            <Country onecountry={selectedCountries[0]} />
        )
    }
}

export default Selected