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
                        <div key={country.name.common}>
                            <div>
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
            <div>
                <Country onecountry={selectedCountries[0]} />
            </div>
        )
    }
}

export default Selected