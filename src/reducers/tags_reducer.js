export default function tagsReducer(state = {loading: false, tags: []}, action) {
    switch (action.type) {
        case 'LOADING_TAGS':
            return Object.assign({}, state, {loading: true})
        case 'FETCH_TAGS':
            return {loading: false, tags: action.payload}
        default:
            return state;
    }
}