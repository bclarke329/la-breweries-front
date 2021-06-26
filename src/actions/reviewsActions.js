export const fetchReviews = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/reviews')
        .then(resp => resp.json())
        .then(reviews => dispatch({ type: 'FETCH_REVIEWS', payload: reviews }))
    }
}


export const addReview = review => {
    return dispatch => {
        fetch('http://localhost:3000/reviews', {
        method: 'POST',
        body: JSON.stringify(review),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(review => dispatch({ type: 'ADD_REVIEW', payload: review }))
    }
    
}