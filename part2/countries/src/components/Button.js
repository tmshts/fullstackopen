
const Button = ({setSelectedCountries, country}) => {

    return (
        <span>
            <button onClick={() => setSelectedCountries([country])}>show</button>
        </span>
    )
}

export default Button