import axios from "axios"

class AxiosService {
    constructor() {
        const instance = axios.create()   //thanh cong        //that bai
        instance.interceptors.response.use(this.handleSuccess,this.handleError)
        this.instance = instance
    }

    handleSuccess(respon){    //call api thanh cong
        return respon
    }

    handleError(error){    //call api failed
        return Promise.reject(error)
    }

    get(url){
        return this.instance.get(url)
    }
}

export default new AxiosService()