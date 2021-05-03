const initialState = [];

function schedules(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "SET_SCHEDULES":
            state = payload;
            return state;

        case "SET_FLASH_SALE_PRODUCT_SCHEDULES_FROM_ECOMMERCE":
            state = [...state.filter(s => s.ecommerce !== "SHOPEE"), ...payload];
            return state;

        case "SET_TODAY_SALE_PRODUCT_SCHEDULES_FROM_ECOMMERCE":
            state = [...state.filter(s => s.ecommerce !== "TIKI"), ...payload];
            return state;

        default:
            return state;
    }
}

export default schedules;