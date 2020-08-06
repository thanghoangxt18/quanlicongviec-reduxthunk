import {createStore, compose, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import rootReducer from "../reducers"

const composeEnhancers = process.env.MODE_ENV !== 'production' &&
typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
    })
    : compose;

const configStore = () => {
    const middlewares = [thunk]
    const enhancers = [
        applyMiddleware(...middlewares)
    ]
    const store = createStore(rootReducer,composeEnhancers(...enhancers))
    return store
}

export default configStore