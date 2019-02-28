import fetch from 'isomorphic-fetch'

export function fetchTags() {
    return(dispatch) => {
        dispatch({type: 'LOADING_PIECES'});
        return fetch('https://vast-taiga-24562.herokuapp.com/tags')
            .then(response => response.json())
            .then(tags => dispatch({type: 'FETCH_TAGS', payload: tags}))
    }
}

// GET THE ACTION TO SHOW UP IN THE PROPS