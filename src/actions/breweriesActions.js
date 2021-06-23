export const fetchBreweries = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/breweries')
        .then(resp => resp.json())
        .then(breweries => dispatch({ type: 'FETCH_BREWERIES', payload: breweries}))
    }
}