import { combineReducers } from "redux";
import { breweriesReducer } from "./breweriesReducer";
import { reviewsReducer } from "./reviewsReducer";

export const rootReducer = combineReducers({
    breweries: breweriesReducer,
    reviews: reviewsReducer
})