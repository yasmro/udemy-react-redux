import { combineReducers } from 'redux'
// count appで処理する状態countをインポート
import count from './count'

// すべてのreducerをcombineReducersで一元化
// ex）export default combineReducers({ state1, state2, state3 })
export default combineReducers({ count })
