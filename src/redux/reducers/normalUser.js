const initialState = [];

function normalUser(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "SET_NORMAL_USER":
            state = payload;
            return state;

        default:
            return state;
    }
}

export default normalUser;