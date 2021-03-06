import * as TaskConstants from './../constants/task'

const initialState = {
    listTask: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case TaskConstants.FETCH_TASK:
            return {...state, listTask: []}

        case TaskConstants.FETCH_TASK_SUCCESS: {
            const {data} = action.payload
            return {
                ...state,
                listTask: data
            }
        }
        case TaskConstants.FETCH_TASK_FAIL: {
            return {...state, listTask: []}
        }
        case TaskConstants.FILLTER_TASK: {
            return state
        }
        case TaskConstants.FILLTER_TASK_SUCCESS: {
            const {data} = action.payload
            return {
                ...state,
                listTask: data
            }
        }
        default:
            return state
    }
}

export default rootReducer
