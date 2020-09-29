import _ from 'lodash'
import { CREATE_EVENT, READ_EVENTS, READ_EVENT, DELETE_EVENT, UPDATE_EVENT } from '../actions'

// state(初期値initialState) とactionをエクスポート
export default (events = {}, action) => {
    switch (action.type){
        case READ_EVENTS:
            console.log(action.response.data)
            console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')

        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATE_EVENT:
            console.log(action.response.data)
            const data = action.response.data
            // すべてのeventsを読み込んだ上で，actionした（更新後の）データdataを上書き
            return {...events, [data.id]: data}       

        case DELETE_EVENT:
            console.log(action.id)
            // eventsから該当のeventを削除
            delete events[action.id]
            return { ...events }

        default:
            return events
    }
}
