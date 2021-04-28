const initialState = [];

function discountCodes(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "SET_DISCOUNT_CODES":
            state = payload;
            return state;

        default:
            return state;
    }
}

export default discountCodes;