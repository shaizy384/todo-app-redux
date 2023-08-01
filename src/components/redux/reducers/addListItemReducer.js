// const initialState = {}
const initialState = {
    items: []
}

const addListItemReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADDTOLIST":
            const { id, item } = payload
            return {
                ...state, items: [...state.items, { id, item }]
            }
        case "DELETEFROMLIST":
            const newItems = state.items.filter((items) => { return items.id !== payload })
            return { items: newItems }
        case "REMOVEALLLIST":
            return { items: [] }
        default:
            return state;
    }
}

export default addListItemReducer