import {createStore, compose, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import rootReducer from "../reducers"
import rootSaga from './../sagas'

import createSagaMiddleware from 'redux-saga'

const composeEnhancers = process.env.MODE_ENV !== 'production' &&
typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
    })
    : compose;

const sagaMiddleware = createSagaMiddleware()

const configStore = () => {
    const middlewares = [thunk, sagaMiddleware]   //dung thunk hoac saga o day

    const enhancers = [
        applyMiddleware(...middlewares)
    ]
    const store = createStore(rootReducer,composeEnhancers(...enhancers))
    sagaMiddleware.run(rootSaga)
    return store
}

export default configStore