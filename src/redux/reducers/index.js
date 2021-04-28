import { combineReducers } from "redux";

import user from "./user";
import normalUser from "./normalUser";
import discountCodes from "./discountCodes";
import categories from "./categories";
import loading from "./loading";

const rootReducer = combineReducers({ loading, user, normalUser, categories, discountCodes });

export default rootReducer;