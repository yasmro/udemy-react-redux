import _ from 'lodash'
import { READ_EVENTS } from '../actions'

// state(初期値initialState) とactionをエクスポート
export default (events = {}, action) => {
    switch (action.type){
        case READ_EVENTS:
            console.log(action.response.data)
            console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')

        default:
            return events
    }
}
