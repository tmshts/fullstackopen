import { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({onecountry}) => {

    const [temp, setTemp] = useState('')
    const [wind, setWind] = useState('')
    const [icon, setIcon] = useState('')

    //console.log(onecountry.capital[0])
    const API_KEY = process.env.REACT_APP_API_KEY
    const capital = onecountry.capital[0]

    useEffect(() => {
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}&units=metric`)
          .then(response => {
            //console.log(response.data)
            //console.log(response.data.main.temp)
            setTemp(response.data.main.temp)
            //console.log(response.data.wind.speed)
            setWind(response.data.wind.speed)
            //console.log(response.data.weather[0].icon)
            setIcon(response.data.weather[0].icon)
          })
        }, []) 

    //console.log('first')
    // GET error because after first iteration the icon is not set yet
    return (
        <div>
            <h1>{onecountry.name.common}</h1>
            capital {onecountry.capital}
            <br/>
            area {onecountry.area}
            <h3>Languages:</h3>
            {Object.values(onecountry.languages).map((value, index) => {
                return (
                    <ul key={index}>
                        <li>{value}</li>
                    </ul>
                )
            })}
            <br/>
            {Object.keys(onecountry.flags).map(key => {
                if (key === 'png') {
                    return (
                        <div>
                            <img src={onecountry.flags[key]} alt="flag"/>
                        </div>
                    )
                }
            })}
            <h2>Weather in {capital}</h2>
            <p>temperature {temp} Celsius</p>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
            <p>wind {wind} m/s </p>
        </div>
    )

}

export default Country