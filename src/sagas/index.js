import {fork, take, call, put, delay, takeLatest, select} from 'redux-saga/effects'
import * as taskTypes from './../constants/task'
import {getList} from './../apis/task'
import {STATUS_CODE} from './../constants/index'
import {fetchListTaskFailed, fetchListTaskSuccess, fillterTaskSuccess} from "../actions/task";
import {showLoading} from "../actions/ui"
import {hideLoading} from "../actions/ui"
import {keys} from "@material-ui/core/styles/createBreakpoints";

function* watchFetchListTaskAction() {
    while (true) { //de saga nay luon luon lang nghe, neu khong co thi no chi nghe 1 lan
        yield take(taskTypes.FETCH_TASK)   //lang nghe va theo doi action
        yield put(showLoading())
        //khi dispatch action FETCH_TASK (o taskBoard) thi cac cau lenh ben duoi duoc kick hoat (danh thuc)
        //console.log("Theo doi action!")
        const resp = yield call(getList)
        console.log("resp:", resp)
        const {data, status} = resp
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchListTaskSuccess(data))    //dispatch action FETCH_TASK_SUCCESS den store -> props truyen vao TaskBoard thay doi -> render lai component
        } else {
            //dispatch action fetchListTaskSuccess
            yield put(fetchListTaskFailed(data))
        }
        yield delay(1000)  //blocking
        yield put(hideLoading())
    }
}

function* fillterTaskSaga({payload}) {
    yield delay(500)
    const {keyword} = payload
    console.log(keyword)
    const list = yield select(state => state.task.listTask)
    const fillterTask = list.filter(task=>task.title.toLowerCase().includes(keyword))
    console.log(fillterTask)
    yield put(fillterTaskSuccess(fillterTask))
}

function* rootSaga() {
    yield fork(watchFetchListTaskAction)   //luon lang nghe nhung thu trong ham Watch
    yield takeLatest(taskTypes.FILLTER_TASK, fillterTaskSaga)      //Khi action FILLTER_TASK được dispatch thì hàm fillterTaskSaga sẽ được execute, {payload}: là return output từ FILLTER_TASK
}

export default rootSaga