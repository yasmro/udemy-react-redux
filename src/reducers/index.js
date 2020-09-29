import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
// count appで処理する状態countをインポート
import events from './events'

// すべてのreducerをcombineReducersで一元化
// ex）export default combineReducers({ state1, state2, state3 })
export default combineReducers({ events, form })
