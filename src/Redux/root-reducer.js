import {combineReducers} from "redux"
import userRducers from "./Reducer"

const rootReducer=combineReducers({
    data:userRducers,
})

export default rootReducer;