import axiosService from "../commons/axiosService"
import {API_ENPOINT} from "../constants"

//
const url = 'tasks'

export const getList = () => {       //phai export ra thi thang import file nay moi dung duoc
    return axiosService.get(`${API_ENPOINT}/${url}`)
}