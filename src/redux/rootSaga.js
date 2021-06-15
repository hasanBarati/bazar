import {all,call} from 'redux-saga/effects'
import {fetchsStart} from './shop/shop-saga'

export default function* rootSaga(){
   yield all([call(fetchsStart)])
}