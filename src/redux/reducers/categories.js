const initialState = [];

function categories(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "SET_CATEGORIES":
            state = payload;
            return state;

        default:
            return state;
    }
}

export default categories;