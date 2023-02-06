
const Filter = ({handleSearchCountry}) => {
    return (
        <div>
            find countries <input onChange={handleSearchCountry}  />
        </div>
    )
}

export default Filter