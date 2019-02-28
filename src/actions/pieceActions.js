import fetch from 'isomorphic-fetch'

export function fetchPieces() {
    return(dispatch) => {
        dispatch({type: 'LOADING_PIECES'});
        return fetch('http://localhost:3001/pieces')
            .then(response => response.json())
            .then(pieces => dispatch({type: 'FETCH_PIECES', payload: pieces}))
    }
}

export function addPiece(formPayload) {
    return(dispatch) => {
        dispatch({type: 'ADDING_PIECE'});
        return fetch(`/pieces/create`, {
            credentials: 'same-origin',
            headers: {},
            method: 'POST',
            body: formPayload
        })
            .then(response => response.json())
            .then(imageFromController => {
                dispatch({type: "ADD_PIECE", payload: imageFromController}) 
                console.log('uploaded:', imageFromController)
            })
    }
}

// {this.props.history.push(`/pieces/${imageFromController.id}`