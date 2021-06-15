import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
//import {persistStore} from 'redux-persist'
import rootReducer from './rooreducer'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './rootSaga'


const sagaMiddleware=createSagaMiddleware()
//const middleWare=[thunk]
const middleWare=[sagaMiddleware,logger]

const store=createStore(rootReducer,applyMiddleware(...middleWare))
sagaMiddleware.run(rootSaga)
//export const persistor=persistStore(store)
export default store









