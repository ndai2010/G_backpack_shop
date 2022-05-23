import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { loginReducer } from './reducers/LoginReducers'
import { UserReducer } from './reducers/UserReducer'

const reducer = combineReducers({
    login: loginReducer,
    user: UserReducer
})
const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store