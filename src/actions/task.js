import * as taskApis from '../apis/task'
import * as TaskConstants from '../constants/task'

export const fetchListTask = () => {
    return {
        type: TaskConstants.FETCH_TASK
    }
}

export const fetchListTaskSuccess = (data) => {
    return {
        type: TaskConstants.FETCH_TASK_SUCCESS,
        payload: {
         data
        }
    }
}

export const fetchListTaskFailed = (error) => {
    return {
        type: TaskConstants.FETCH_TASK_FAIL,
        payload: {
            error
        }
    }
}

export const fetchTaskListRequest = () => {
    return dispatch => {    //thuc thi hanh dong lay du lieu theo middleware rule o axiosService
        dispatch(fetchListTask())    //goi action nay truoc khi call taskApis
        taskApis
            .getList()
            .then(res => {
                const {data} = res
                console.log(data)
                dispatch(fetchListTaskSuccess(data)) // co dau () la thuc thi
            })
            .catch(error=>{
                console.log('error:', error)
                dispatch(fetchListTaskFailed())
            })
    }
}