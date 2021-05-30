const initialState = [];

function statistic(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "SET_STATISTIC":
            state = payload;
            return state;

        default:
            return state;
    }
}

export default statistic;